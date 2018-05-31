import React from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';

class StoryBoard extends React.Component {

  componentDidMount() {
    const { dispatch, stories } = this.props;
    // debugger 
    dispatch(getStories())
  }

  render(){
    const { stories } = this.props;
    // debugger
      return(
        <div style={styles.storyBox}>
          <Header as='h2'>StoryBoard</Header>
          <div>
            { stories.map( story =>
            <div>
              <br />
              <Header as='h3'>{story.title}</Header>
              <Header as='h4'>Author: {story.author}</Header>
              <p>{story.body}</p>
            </div>
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
  }
}

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryBoard);