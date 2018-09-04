import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Header, Rating } from 'semantic-ui-react'
import { BackFade2 } from './StyledComp'
import axios from 'axios'

class Story extends React.Component {

  state = { story: {}, comments: {} }

  componentDidMount() {
    const { story } = this.props
    axios.get(`/api/stories/${story.id}/comments`)
    .then( res => {
      this.setState({ comments: res.data })
    })
  }
    
  render() {
    const { story } = this.props
    return(
      <BackFade2>
        <Link to={`/stories/${story.id}/comments`}><Header as='h3'>{story.title}</Header></Link>
         {/* TODO for some reason the story id isn't transerfing and Im getting a 404 error. Need to trace it back */}
        {/* TODO make the defaultRating above an average of all comments ratings. */}
        <Image src={story.image_one} size='small' floated='left' />
        <Rating icon='star' defaultRating={5} maxRating={5} />
        <p>
          {story.body_one}
        </p>
        <Image src={story.image_two} size='small' floated='right' />
        <p>
          {story.body_two}
        </p>
        <p>
          {story.author}
        </p>
      </BackFade2>
    )
  }
}

export default Story