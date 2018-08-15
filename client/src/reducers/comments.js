import { ADD_COMMENT, DELETE_COMMENT, COMMENTS } from '../actions/comments'

const comments = ( state = [], action ) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.comment]
    case DELETE_COMMENT:
      return state.filter( c => c.id !== action.id )
    case COMMENTS:
      return action.comments
    default:
      return state
  }
}

export default comments