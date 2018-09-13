import React from 'react'
import { Container, Divider } from 'semantic-ui-react'
import Project from './Project'
import { Title, Header1, Header4, DividerWhite } from '../StyledComp'

class Projects extends React.Component {
  render() {
    return(
      <Container>
        <Title>
          <Header1>Projects</Header1>
          <Header4>
            <DividerWhite />
          </Header4>
          <Divider hidden />
        </Title>
        <Project url={this.props.match.path} history={this.props.history} />
      </Container>
    )
  }
}

export default Projects