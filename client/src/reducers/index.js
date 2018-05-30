import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import stories from './stories';

const rootReducer = combineReducers({
  user,
  flash,
  stories,
});

export default rootReducer;
