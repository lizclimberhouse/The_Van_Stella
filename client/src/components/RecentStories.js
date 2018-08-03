import React from 'react'
import { connect } from 'react-redux'
import { getRecentStories } from '../actions/stories'
import StoryBox from './StoryBox'

class RecentStories extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getRecentStories())
  }

  render() {
    const { stories } = this.props
    return(
      <div>
        { stories.map( story =>
          <StoryBox key={story.id} style={styles.boxSize} id={story.id} story={story} />
        )}
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

export default connect(mapStateToProps)(RecentStories)