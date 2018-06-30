import React from 'react';
import axios from 'axios';
import { Header1, BackFade1, Title, Header4, DividerWhite } from './StyledComp';
import { Divider, Container } from 'semantic-ui-react';
import Story from './Story';
import AddComment from './AddComment';

class StoryComment extends React.Component {

  state = { story: {} }

  componentDidMount() {
    // console.log(this.props.match.params.id)
    const id = this.props.match.params.id  
    axios.get(`/api/stories/${id}`)
      .then( res => this.setState({ story: res.data })
    )}

  navigateToPlace = () => {
    // console.log('Navigate somewhere')
    this.props.history.push('/archive')
    // console.log(string) pass string back in to the ()
  }

  render() {
    const { story } = this.state;
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
      </Container>
    )
  }
}

export default StoryComment;