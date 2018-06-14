import React from 'react';
// import { Header, Container, Divider, Image, Segment, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';
import Story from './Story';
import { Header2 } from './StyledComp';

class StoryBoard extends React.Component {

  componentDidMount() {
    const { dispatch, stories } = this.props;
    dispatch(getStories())
  }

  render(){
    const { stories, match } = this.props;
      return(
        <div style={styles.storyBox}>
          <Header2>StoryBoard</Header2>
          <div>
            { stories.map( story =>
            <Story style={styles.boxSize} id={story.id} url={this.props.url} story={story} history={this.props.history} />
            )}
          </div>
        </div>
      )
    }
}

const styles = {
  storyBox: {
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
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryBoard);