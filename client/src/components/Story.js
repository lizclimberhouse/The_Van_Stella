import React from 'react';
import { Component, Divider, Header, Segment, Image, Button } from 'semantic-ui-react';
import StoryForm from './StoryForm';

class Story extends React.Component {

  state = { showStoryForm: false }

  toggleEdit = () => {
    const { showStoryForm } = this.state;
    this.setState( state => {
      return { showStoryForm: !showStoryForm }
    })
  }

  deleteStory = (id) => {
    //TODO
  }

  render() {
    const { story, url } = this.props;
    const { showStoryForm } = this.state;
    return(
      <Segment>
        <Segment>
          <Header as='h3'>{story.title}</Header>
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
        </Segment>
        { this.props.url ? 
        <Segment>
          <Button color='yellow' onClick={this.toggleEdit}>Edit</Button>
          <Button color='red' onClick={this.deleteStory(story.id)}>Delete</Button>
        { showStoryForm ? 
          <StoryForm />
          :
          null
        }
        </Segment>
        :
        null
        }
      </Segment>
    )
  }
}

export default Story;