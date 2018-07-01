import React from 'react';
// import { connect } from 'react-redux';
// import { getComments } from '../actions/comments';
// import { Header4 } from './StyledComp';
// import axios from 'axios';

class Comments extends React.Component {

  render() {
    const { comments } = this.props;
    return(
      <div>
        { comments ? <div>true</div> : <div>false</div>}
      </div>
      // TODO why can't I map over these? I have them, but I can't use them?
    )
  }
}

export default Comments;