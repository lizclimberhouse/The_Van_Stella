import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getRecentStories } from '../actions/stories';
import Story from './Story';
import { Header2 } from './StyledComp';

class RecentStories extends React.Component {

  componentDidMount() {
    const { dispatch, stories } = this.props;
    dispatch(getRecentStories())
  }

  render() {
    const { stories } = this.props;
    return(
      <div>
        <div>RecentStories</div>
          <div>
            { stories.map( story =>
            <Story style={styles.boxSize} id={story.id} story={story} />
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

export default connect(mapStateToProps)(RecentStories);