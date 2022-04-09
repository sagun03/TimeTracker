import { combineReducers } from 'redux'
import navigationReducer from './navigation/navigationReducer'
import authorReducer from './author/authorReducer';
import taskReducer from './task/taskReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  author: authorReducer,
  task: taskReducer,
})

export default rootReducer