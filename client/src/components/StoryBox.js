import React from 'react';
import { Header, Segment, Image, Button, Rating } from 'semantic-ui-react';
import StoryForm from './StoryForm';
import StoryDelete from './StoryDelete';
import { BackFade1, BackFade2 } from './StyledComp';
import Story from './Story';

class StoryBox extends React.Component {

  state = { showStoryForm: false, showDeleteCheck: false }

  toggleEdit = () => {
    const { showStoryForm } = this.state;
    this.setState( state => {
      return { showStoryForm: !showStoryForm }
    })
  }

  toggleDeleteStory = () => {
    const { showDeleteCheck } = this.state;
    this.setState( state => {
      return { showDeleteCheck: !showDeleteCheck }
    })
  }

  // TODO add a confirm from semantic ui react instead of the flash message
  render() {
    const { story, url } = this.props;
    const { showStoryForm, showDeleteCheck } = this.state;
    return(
      <BackFade1>
        <Story story={story} url={url} />
        { url ? 
        <BackFade2>
          { showStoryForm || showDeleteCheck ?
            null
            :
            <div>
              <Button color='yellow' onClick={this.toggleEdit}>Edit</Button>
              <Button color='red' onClick={this.toggleDeleteStory}>Delete</Button>
            </div>
          }
          { showStoryForm ? 
            <div>
              <Button color='yellow' onClick={this.toggleEdit}>Cancel</Button>
              <StoryForm id={story.id} history={this.props.history} {...story} />
            </div>
            :
            null
          }
          { showDeleteCheck ? 
            <div>
              <Button color='yellow' onClick={this.toggleDeleteStory}>Cancel</Button>
              <StoryDelete id={story.id} history={this.props.history} {...story} />
            </div>
            :
            null
          }
        </BackFade2>
        :
        null
        }
      </BackFade1>
    )
  }
}

export default StoryBox;