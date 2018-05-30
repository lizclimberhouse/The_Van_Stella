import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';

export class StoryNew extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getStories())
  }

  render() {
    return(
      <div>StoryNew</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryNew);