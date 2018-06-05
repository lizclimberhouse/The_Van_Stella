import React from 'react';
import { Header, Container, Divider, Image, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';

class StoryBoard extends React.Component {

  componentDidMount() {
        console.log(this.props.url)
        // const profile = games.find( g => g.id === parseInt(this.props.match.params.id, 10 ) ) || {}


    const { dispatch, stories } = this.props;
    // debugger 
    dispatch(getStories())
  }

  render(){
    const { stories, match } = this.props;
    // debugger
      return(
        <div style={styles.storyBox}>
          <Header as='h2'>StoryBoard</Header>
          <div>
            { stories.map( story =>
            <Segment key={story.id}>
              
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
                <Button color='yellow'>Edit</Button>
                <Button color='red'>Delete</Button>
              </Segment>
              :
              null
              }
            </Segment>
            )}
          </div>
        </div>
      )
    }
}

const styles = {
  storyBox: {
    backgroundColor: 'yellow',
    padding: '50px',
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageSingle: {
    width: '220px',
  },
}

const mapStateToProps = (state) => {
  return { stories: state.stories, user: state.user }
}

export default connect(mapStateToProps)(StoryBoard);