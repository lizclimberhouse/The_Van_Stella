import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Image, Button, Rating } from 'semantic-ui-react';
import { BackFade1, BackFade2 } from './StyledComp';
import { deleteComment } from '../actions/comments';
import { setFlash } from '../actions/flash';


class CommentBox extends React.Component {

  deleteComment = (id, story_id) => {
    const { dispatch } = this.props
    dispatch(deleteComment(id, story_id))
    dispatch(setFlash('Comment Deleted', 'red'));
  }

  render() {
    const { comment, url, id } = this.props;
    return(
      <BackFade2>
        <Header as='h3'>{comment.author}</Header>
        <p>
          {comment.body}
        </p>
        { url ? 
        <div>
          <Button color='red' onClick={() => this.deleteComment(comment.id, id)}>Delete</Button>
        </div>
        :
        null
        }
      </BackFade2>
    )
  }
}

export default connect()(CommentBox);