import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addStory, updateStory } from '../actions/stories';
import { setFlash } from '../actions/flash';

class StoryForm extends React.Component {

  initialStory = { 
    title: '',
    body_one: '',
    body_two: '',
    body_three: '',
    author: '',
    image_one: '',
    image_two: '',
    image_three: '',
  }

  state = {...this.initialStory}

  componentDidMount() {
    if ( this.props.id )
      this.setState({ ...this.props })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const story = {...this.state}
    const { dispatch } = this.props
    const func = this.props.id ? updateStory : addStory
    dispatch(func(story))
    const message = this.props.id ? 'Story Updated. ' : 'Story Added. '
    dispatch(setFlash( message, 'green'));
    this.props.history.push("/archive")
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { title, body_one, body_two, body_three, author, image_one, image_two, image_three } = this.props;
    return(
      <div>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              width='10'
              name="title"
              label="Title"
              defaultValue={title}
              onChange={this.handleChange}
              required
            />
            { this.props.id ? 
            <Form.Input
              width='6'
              name="author"
              label="Author"
              defaultValue={author}
              onChange={this.handleChange}
              readOnly
            />
            :
            <Form.Input
              width='6'
              name="author"
              label="Author"
              defaultValue={author}
              onChange={this.handleChange}
              required
            />
            }
          </Form.Group>
          <Form.TextArea
            name="body_one"
            label="Body 1"
            defaultValue={body_one}
            onChange={this.handleChange}
            required
          />
          <Form.TextArea
            name="body_two"
            label="Body 2"
            defaultValue={body_two}
            onChange={this.handleChange}
          />
          <Form.TextArea
            name="body_three"
            label="Body 3"
            defaultValue={body_three}
            onChange={this.handleChange}
          />
          <Form.Input
            name="image_one"
            label="Image 1"
            defaultValue={image_one}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            name="image_two"
            label="Image 2"
            defaultValue={image_two}
            onChange={this.handleChange}
          />
          <Form.Input
            name="image_three"
            label="Image 3"
            defaultValue={image_three}
            onChange={this.handleChange}
          />
          <Form.Button color="green">Save</Form.Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { story: state.story}
};

export default connect(mapStateToProps)(StoryForm);