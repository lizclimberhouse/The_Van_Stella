import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import { Title, Header1, Header4, DividerWhite } from './StyledComp'
import RecentStories from './RecentStories'

const Home = () => (
  <Container>
    <Title>
      <Header1>The Van Stella</Header1>
      <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
      <Divider hidden />
    </Title>
    <div>
      <Header1>New Post!</Header1>
      <Header4>11 year anniversary trip to Tahoe</Header4>
    </div>
    <RecentStories/>
  </Container>
  // TODO - really need to add a section about van fix-it projects
)

export default Home