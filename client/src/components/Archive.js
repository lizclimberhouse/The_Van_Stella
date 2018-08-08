import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { Title, Header1, Header4, DividerWhite } from './StyledComp'
import StoryBoard from './StoryBoard'

const Archive = () => (
  <Container>
    <Title>
      <Header1>Archives</Header1>
      <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
      <Divider hidden />
    </Title>
    <StoryBoard/>
  </Container>
)

export default Archive