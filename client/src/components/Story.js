import React from 'react';
import { connect } from 'react-redux';
import { Header, Segment, Image, Button, Rating } from 'semantic-ui-react';
import StoryForm from './StoryForm';
import StoryDelete from './StoryDelete';

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
      <div style={styles.fade}>
        <div style={styles.fade2}>
          <Header as='h3'>{story.title}</Header>
          <Rating icon='star' defaultRating={5} maxRating={5} />
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
        </div>
        { url ? 
        <div style={styles.fade2}>
        {/* <Segment> */}
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
        {/* </Segment> */}
        </div>
        :
        null
        }
      </div>
    )
  }
}

const styles = {
  fade: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    margin: "1rem 0",
    padding: "1em 1em",
    borderRadius: ".28571429rem",
  },
  fade2: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    margin: "1rem 0",
    padding: "1em 1em",
    borderRadius: ".28571429rem",
  }
}

export default connect()(Story);