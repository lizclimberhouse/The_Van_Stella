import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { Title, Header1, Header4, DividerWhite } from './StyledComp'
import StellaDetails from './StellaDetails'
import StellaRebuild from './StellaRebuild'

const Stella = () => (
  <Container>
    <Title>
      <Header1>Stella</Header1>
      <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
      <Divider hidden />
    </Title>
    <StellaDetails />
    <Divider hidden />
    <StellaRebuild />
  </Container>
)

export default Stella