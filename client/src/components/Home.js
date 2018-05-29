import React, { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import StoryBoard from './StoryBoard';

class Home extends Component {
  render() {
    return (
      <Container style={styles.mainPadding}>
        <div style={styles.heading}>
          <Header as='h1' textAlign='center'>The Van Stella</Header>
          <Header as='h4' textAlign='center' style={styles.equation}>2 humans<br/>1 dog<br/>+ a van<Divider style={styles.divider} />weekend warriors</Header>
        </div>
        <br/>
        <StoryBoard/>
      </Container>
    );
  }
}

const styles = {
  mainPadding: {
    padding: '30px 0',
  },
  divider: {
    backgroundColor: 'white',
  },
  heading: {
    backgroundColor: 'green',
    padding: '50px',
  },
}

export default Home;
