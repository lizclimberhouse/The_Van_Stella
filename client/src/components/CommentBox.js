import React from 'react';
import { Header, Segment, Image, Button, Rating } from 'semantic-ui-react';
// import StoryForm from './StoryForm';
// import StoryDelete from './StoryDelete';
import { BackFade1, BackFade2 } from './StyledComp';
// import Story from './Story';

class CommentBox extends React.Component {

  render() {
    const { comment, url } = this.props;
    return(
      <BackFade2>
          <Header as='h3'>{comment.author}</Header>
          <p>
            {comment.body}
          </p>
          { url ? 
          <div>
            delete Button
          </div>
          :
          null
          }
        </BackFade2>
    )
  }
}

export default CommentBox;