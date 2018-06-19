import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Title, Header1, Header4, DividerWhite } from './StyledComp';
import RecentStories from './RecentStories';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>
            <Header1>The Van Stella</Header1>
            <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
            <Divider hidden />
          </Title>
          <RecentStories/>
        </Container>
      </div>
    );
  }
}

export default Home;
