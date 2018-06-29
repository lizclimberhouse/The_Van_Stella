import React from 'react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';
import Story from './Story';

class StoryBoard extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getStories())
  }

  render(){
    const { stories } = this.props;
    return(
      <div>
        { stories.map( story =>
          <Story id={story.id} url={this.props.url} story={story} history={this.props.history} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryBoard);