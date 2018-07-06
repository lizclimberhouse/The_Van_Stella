import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Header, Rating } from 'semantic-ui-react';
import { BackFade2 } from './StyledComp';
import Comments from './Comments';
import axios from 'axios';

class Story extends React.Component {

  state = { story: {}, comments: {} }

  componentDidMount() {
    const { id } = this.props.story
    axios.get(`/api/stories/${id}/comments`)
    .then( res => {
      this.setState({ comments: res.data })
    })
    }
    
  render() {
    const { story, url } = this.props;
    const { comments } = this.state;
    return(
      <BackFade2>
          <Header as='h3'>{story.title}</Header>
          { url ? 
          null
          :
          <div>
          <Link to={`/stories/${story.id}/comment`}>Story Comments</Link>
          <Comments story={story} comments={comments} />
          </div>
          // TODO make the defaultRating above an average of all comments ratings.
          }
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

export default Story;