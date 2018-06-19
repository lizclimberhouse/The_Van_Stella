import { STORIES, UPDATE_STORY, ADD_STORY, DELETE_STORY, RECENT_STORIES } from '../actions/stories';

const stories = ( state = [], action ) => {
  switch(action.type) {
    case STORIES:
      return action.stories;
    case RECENT_STORIES:
      return action.stories;
    case UPDATE_STORY:
      return state.map( s => {
        if (s.id === action.story.id)
          return action.story
        return s;
      })
    case ADD_STORY:
      return [action.story, ...state];
    case DELETE_STORY:
      return state.filter( s => s.id !== action.id )
    default:
      return state;
  }
}

export default stories;