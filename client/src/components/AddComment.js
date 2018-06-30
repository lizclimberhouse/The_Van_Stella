import React from 'react';
import { Header4, BackFade2 } from './StyledComp';
import { Rating, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import { addComment } from '../actions/comments';


class AddComment extends React.Component {
  initialComment = {
    author: '',
    body: '',
    rating: 5,
    maxRating: 5,
  }

  state = { ...this.initialComment }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  handleSubmit = (e) => {
    // debugger
    e.preventDefault()
    const story_id = this.props.story.id
    console.log(story_id)
    const comment = {...this.state, story_id}
    const { dispatch } = this.props
    dispatch(addComment(comment))
    dispatch(setFlash( 'Comment Submitted', 'green'))
    // this.props.history.push('/archive')
    this.props.navigateToPlace()
    // to pass something back to the parent comp. put 'a string' in the ()
  }

  render() {
    const { author, body } = this.state;
    return(
      <BackFade2>
        <Header4>AddComment</Header4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              width='6'
              name="author"
              label="Author"
              defaultValue={author}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              width='10'
              name="body"
              label="Body"
              defaultValue={body}
              onChange={this.handleChange}
            />
            <Rating 
              icon='star' 
              maxRating={5} 
              onRate={this.handleRate} 
              defaultRating={this.state.rating}
              required
            />
            <Form.Button color='green'>Submit</Form.Button>
          </Form.Group>
        </Form>
      </BackFade2>
      // TODO defaultRating will come from an average at some point.
      // TODO create comments controller that belongs to a story
      // TODO create add comment ability from non-logged in user. Add only.
      // TODO create delete comment option for logged in user. 
      // TODO stars is part of comments.
      // TODO how to allow to save how many stars are clicked.
    )
  }
}

const mapStateToProps = (state) => {
  return { comment: state.comment }
}

export default connect(mapStateToProps)(AddComment);