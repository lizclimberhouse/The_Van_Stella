import React, { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import StoryBoard from './StoryBoard';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as='h1' textAlign='center'>The Van Stella</Header>
        <Header as='h4' textAlign='center'>2 humans<br/>1 dog<br/>+ a van<Divider />weekend warriors</Header>
        <StoryBoard/>
      </Container>
    );
  }
}

export default Home;
