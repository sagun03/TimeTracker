import { combineReducers } from 'redux'
import navigationReducer from './navigation/navigationReducer'
import authorReducer from './author/authorReducer';
import taskReducer from './task/taskReducer';
import demoReducer from './demo/demoReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  author: authorReducer,
  task: taskReducer,
  demo: demoReducer,
})

export default rootReducer