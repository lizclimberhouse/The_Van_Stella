import React from 'react';
import { connect } from 'react-redux';
import { Component, Divider, Header, Segment, Image, Button } from 'semantic-ui-react';
import StoryForm from './StoryForm';
import StoryDelete from './StoryDelete';
import { deleteStory } from '../actions/stories';

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
        </Segment>
        :
        null
        }
      </Segment>
    )
  }
}
// style={styles.boxSize}
// const styles = {
//   boxSize: {
//     height: '250px',
//   },
// }

export default connect()(Story);