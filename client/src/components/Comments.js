import React from 'react';
import { BackFade1 } from './StyledComp';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
// import { Header4 } from './StyledComp';
// import axios from 'axios';
import { Button } from 'semantic-ui-react';
import CommentBox from './CommentBox';

class Comments extends React.Component {

  getComments = (id) => {
    const { dispatch } = this.props;
    // debugger
    dispatch(getComments(id))
  }

  render(){
    const { comments, story } = this.props;
    return(
      <BackFade1>
        <div>{story.id}</div>
        <Button color='yellow' onClick={() => this.getComments(story.id)}>See Comments</Button>
        { comments.map( comment =>
          <CommentBox key={comment.id} id={comment.id} comment={comment} />
        )}
        { this.props.url == "profile" ? 
        null
        :
        <div>
          delete Button
        </div>
        }
      </BackFade1>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(Comments);