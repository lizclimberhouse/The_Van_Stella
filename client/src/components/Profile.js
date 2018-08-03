import React from 'react'
import { Container, Button, Divider } from 'semantic-ui-react'
import StoryBoard from './StoryBoard'
import { Link } from 'react-router-dom'
import { Title, Header1, Header4, DividerWhite } from './StyledComp'

class Profile extends React.Component {
  render() {
    return(
      <Container>
        <Title>
          <Header1>Profile</Header1>
          <Header4>
            <DividerWhite />
            <Link to='story_new'><Button color='green'>Add New Story</Button></Link>
          </Header4>
          <Divider hidden />
        </Title>
        <StoryBoard url={this.props.match.path} history={this.props.history} />
      </Container>
    )
  }
}

export default Profile