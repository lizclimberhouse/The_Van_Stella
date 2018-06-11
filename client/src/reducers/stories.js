import { STORIES, UPDATE_STORY } from '../actions/stories';

const stories = ( state = [], action ) => {
  switch(action.type) {
    case STORIES:
      return action.stories;
    case UPDATE_STORY:
      return state.map( s => {
        if (s.id === action.story.id)
          return action.story
        return s;
      })
    default:
      return state;
  }
}

export default stories;