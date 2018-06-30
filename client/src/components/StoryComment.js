import React from 'react';
import axios from 'axios';
import { Header1 } from './StyledComp';

class StoryComment extends React.Component {

  state = { story: {} }

  componentDidMount() {
    const id = this.props.match.params.id  
    axios.get(`/api/stories/${id}`)
      .then( res => this.setState({ story: res.data })
    )}

  render() {
    const { story } = this.state;
    return(
      <div>
        <Header1>StoryComment - {story.title} - story.body_one</Header1>
      </div>
    )
  }
}

export default StoryComment;