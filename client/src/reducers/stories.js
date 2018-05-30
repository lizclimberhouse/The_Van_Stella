import { STORIES } from '../actions/stories';

const stories = ( state = [], action ) => {
  switch(action.type) {
    case STORIES:
      return action.stories;
    default:
      return state;
  }
}

export default stories;