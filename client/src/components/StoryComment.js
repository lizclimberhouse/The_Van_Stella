import React from 'react';
import axios from 'axios';
import { Header1, BackFade1, Title, Header4, DividerWhite } from './StyledComp';
import { Divider, Container } from 'semantic-ui-react';
import Story from './Story';

class StoryComment extends React.Component {

  state = { story: {} }

  componentDidMount() {
    const id = this.props.match.params.id  
    axios.get(`/api/stories/${id}`)
      .then( res => this.setState({ story: res.data })
    )}

  render() {
    const { story } = this.state;
    return(
      <Container>
        <Title>
          <Header1>StoryComment</Header1>
          <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
          <Divider hidden />
        </Title>
        <BackFade1>
          <Story story={story} />
        </BackFade1>
      </Container>
    )
  }
}

export default StoryComment;