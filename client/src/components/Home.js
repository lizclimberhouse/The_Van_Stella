import React, { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import StoryBoard from './StoryBoard';
import Mountains from '../images/mountains.png';
import Heading from '../styled/Heading';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Heading>
            <Header as='h1' textAlign='center'>The Van Stella</Header>
            <Header as='h4' textAlign='center'>2 humans<br/>1 dog<br/>+ a van<Divider style={styles.divider} />weekend warriors</Header>
          </Heading>
          <br/>
          <StoryBoard/>
        </Container>
      </div>
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

}

export default Home;
