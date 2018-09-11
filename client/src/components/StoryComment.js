import axios from 'axios'
import React from 'react'
import { Header1, BackFade1, Title, Header4, DividerWhite } from './StyledComp'
import { Divider, Container } from 'semantic-ui-react'
import Story from './Story'
import AddComment from './AddComment'
import Comments from './Comments'

class StoryComment extends React.Component {

  state = { story: {}}

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`/api/stories/${id}`)
      .then( res => this.setState({ story: res.data })
    )
  }

  navigateToPlace = () => {
    // KEEP - console.log('Navigate somewhere')
    this.props.history.push('/archive')
    // KEEP - console.log(string) pass string back in to the ()
    // Learned more about passing functions as well as callback functions to actions.
  }

  render() {
    const { story, comments } = this.state
    return(
      <Container>
        <Title>
          <Header1>StoryComment</Header1>
          <Header4>2 humans<br/>1 dog<br/>+ a van<DividerWhite />weekend warriors</Header4>
          <Divider hidden />
        </Title>
        <BackFade1>
          <Story story={story} url={story.id}/>
        </BackFade1>
        <Divider hidden />
        <AddComment story={story} navigateToPlace={this.navigateToPlace} />
        <Comments story={story} comments={comments} />
      </Container>
    )
  }
}

export default StoryComment