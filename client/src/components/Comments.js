import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
import { Button } from 'semantic-ui-react';
import CommentBox from './CommentBox';

class Comments extends React.Component {

  state = {showComments: false}

  getComments = (id) => {
    const { dispatch } = this.props;
    dispatch(getComments(id))
  }

  toggleComments = (id) => {
    const { showComments } = this.state;
    this.setState( state => {
      return { showComments: !showComments }
    })
    this.getComments(id)
  }

  render(){
    const { comments, story } = this.props;
    return(
      <div>
        <Button color='yellow' onClick={() => this.toggleComments(story.id)}>Show Comments</Button>
        { comments.map( comment =>
          this.state.showComments ? <CommentBox key={comment.id} id={story.id} comment={comment} url={this.props.url} /> : null
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(Comments);