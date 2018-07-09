import React from 'react';
import { BackFade1 } from './StyledComp';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
import { Button } from 'semantic-ui-react';
import CommentBox from './CommentBox';

class Comments extends React.Component {

  getComments = (id) => {
    const { dispatch } = this.props;
    dispatch(getComments(id))
  }

  render(){
    const { comments, story } = this.props;
    return(
      <BackFade1>
        <Button color='yellow' onClick={() => this.getComments(story.id)}>See Comments</Button>
        { comments.map( comment =>
          <CommentBox key={comment.id} id={story.id} comment={comment} url={this.props.url} />
        )}
      </BackFade1>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(Comments);