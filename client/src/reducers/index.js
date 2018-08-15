import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import stories from './stories'
import comments from './comments'

const rootReducer = combineReducers({
  user,
  flash,
  stories,
  comments,
})

export default rootReducer
