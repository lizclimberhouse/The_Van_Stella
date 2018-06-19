import React from 'react';
import { Container } from 'semantic-ui-react';
// import StoryBoard from './StoryBoard';
import { Title, Header1, Header4, DividerWhite } from './StyledComp';
import StoryBoard from './StoryBoard';

class Archive extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Title>
            <Header1>Archives</Header1>
            <DividerWhite />
          </Title>
          <StoryBoard/>
        </Container>
      </div>
    );
  }
}

export default Archive;