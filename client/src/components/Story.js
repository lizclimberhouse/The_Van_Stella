import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Image, Button, Rating } from 'semantic-ui-react';
import StoryForm from './StoryForm';
import StoryDelete from './StoryDelete';
import { BackFade1, BackFade2 } from './StyledComp';
import { Link } from 'react-router-dom';

class Story extends React.Component {

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

  render() {
    const { story, url } = this.props;
    const { showStoryForm, showDeleteCheck } = this.state;
    return(
      <BackFade1>
        <BackFade2>
          <Header as='h3'>{story.title}</Header>
          { url ? 
          null
          :
          <Link to={`/stories/${story.id}/comment`}><Rating icon='star' defaultRating={5} maxRating={5} /></Link>
          }
          <Image src={story.image_one} size='small' floated='left' />
          <p>
            {story.body_one}
          </p>
          <Image src={story.image_two} size='small' floated='right' />
          <p>
            {story.body_two}
          </p>
          <p>
            {story.author}
          </p>
        </BackFade2>
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

export default connect()(Story);