import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Header, Rating } from 'semantic-ui-react';
import { BackFade2 } from './StyledComp';

class Story extends React.Component {
  render() {
    const { story, url } = this.props;
    return(
      <BackFade2>
          <Header as='h3'>{story.title}</Header>
          { url ? 
          null
          :
          <Link to={`/stories/${story.id}/comment`}><Rating icon='star' defaultRating={5} maxRating={5} /></Link>
          // TODO make the defaultRating above an average of all comments ratings.
          }
          <Image src={story.image_one} size='small' floated='left' />
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