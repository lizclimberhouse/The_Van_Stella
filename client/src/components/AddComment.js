import React from 'react';
import { Header4, BackFade2 } from './StyledComp';
import { Rating } from 'semantic-ui-react';

class AddComment extends React.Component {
  state = { rating: 5, maxRating: 5 }

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return(
      <BackFade2>
        <Header4>AddComment</Header4>
        <Rating icon='star' maxRating={5} onRate={this.handleRate} defaultRating={this.state.rating}/>
      </BackFade2>
      // TODO defaultRating will come from an average at some point.
      // TODO create comments controller that belongs to a story
      // TODO create add comment ability from non-logged in user. Add only.
      // TODO create delete comment option for logged in user. 
      // TODO stars is part of comments.
      // TODO how to allow to save how many stars are clicked.
    )
  }
}

export default AddComment;