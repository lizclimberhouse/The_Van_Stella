import React from 'react';
import { connect } from 'react-redux';
import { Component, Divider, Header, Segment, Image, Button } from 'semantic-ui-react';
import StoryForm from './StoryForm';
import { deleteStory } from '../actions/stories';

class Story extends React.Component {

  state = { showStoryForm: false }

  toggleEdit = () => {
    const { showStoryForm } = this.state;
    this.setState( state => {
      return { showStoryForm: !showStoryForm }
    })
  }

  deleteStory = (id) => {
    const { dispatch } = this.props
    dispatch(deleteStory(id))
    this.props.history.push('/')
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
          { showStoryForm ?
            <Button color='yellow' onClick={this.toggleEdit}>Cancel</Button>
            :
            <div>
              <Button color='yellow' onClick={this.toggleEdit}>Edit</Button>
              <Button color='red' onClick={() => this.deleteStory(story.id)}>Delete</Button>
            </div>
          }
          { showStoryForm ? 
            <div>
              <StoryForm id={story.id} history={this.props.history} {...story} />
            </div>
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

export default connect()(Story);