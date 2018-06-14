import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import StoryBoard from './StoryBoard';
import { Title, Header1, Header4, DividerWhite } from './StyledComp';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>
            <Header1>The Van Stella</Header1>
            <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
          </Title>
          <StoryBoard/>
        </Container>
      </div>
    );
  }
}

export default Home;
