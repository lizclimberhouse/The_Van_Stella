import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Title, Header1, Header4, DividerWhite } from './StyledComp';
export class Stella extends React.Component {

  render() {
    return(
      <Container>
        <Title>
          <Header1>Stella</Header1>
          <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
          <Divider hidden />
        </Title>
      </Container>
    )
  }
}

export default Stella;