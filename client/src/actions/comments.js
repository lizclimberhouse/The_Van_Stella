import axios from 'axios';

export const COMMENTS = 'COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const getComments = (id) => {
  // debugger
  return (dispatch) => {
    axios.get(`/api/stories/${id}/comments`)
      .then( res => dispatch({ type: COMMENTS, comments: res.data, headers: res.headers }))
  }
}

export const addComment = (comment) => {
  // debugger
  return (dispatch) => {
    axios.post(`/api/stories/${comment.story_id}/comments`, { comment })
      .then( res => dispatch({ type: ADD_COMMENT, comment: res.data, headers: res.headers }))
  }
}

export const deleteComment = (id, story_id) => {
  return (dispatch) => {
    axios.delete(`/api/stories/${story_id}/comments/${id}`)
      .then( res => dispatch({ type: DELETE_COMMENT, id, headers: res.headers }))
  }
}