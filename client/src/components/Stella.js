import React from 'react';
import { Container } from 'semantic-ui-react';
import { Title, Header1, Header4, DividerWhite } from './StyledComp';
export class Stella extends React.Component {

  render() {
    return(
      <Container>
        <Title>
          <Header1>Stella</Header1>
          <Header4><DividerWhite />the van</Header4>
        </Title>
      </Container>
    )
  }
}

export default Stella;