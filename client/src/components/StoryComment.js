import React from 'react';
import axios from 'axios';
import { Header1, BackFade1, Title, Header4, DividerWhite } from './StyledComp';
import { Divider, Container } from 'semantic-ui-react';
import Story from './Story';
import AddComment from './AddComment';
import Comments from './Comments';

class StoryComment extends React.Component {

  state = { story: {}, comments: {} }

  componentDidMount() {
    const id = this.props.match.params.id  
    axios.get(`/api/stories/${id}`)
      .then( res => this.setState({ story: res.data })
    )
    axios.get(`/api/stories/${id}/comments`)
    .then( res => {
      this.setState({ comments: res.data })
    })
    }

  navigateToPlace = () => {
    // KEEP - console.log('Navigate somewhere')
    this.props.history.push('/archive')
    // KEEP - console.log(string) pass string back in to the ()
  }

  render() {
    const { story, comments } = this.state;
    return(
      <Container>
        <Title>
          <Header1>StoryComment</Header1>
          <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
          <Divider hidden />
        </Title>
        <BackFade1>
          <Story story={story} url={story.id}/>
        </BackFade1>
        <Divider hidden />
        <AddComment story={story} navigateToPlace={this.navigateToPlace} />
        <Comments story={story} comments={comments} />
      </Container>
    )
  }
}

export default StoryComment;