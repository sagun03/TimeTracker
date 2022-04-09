import { DELETE_TASK, EDIT_TASK, SAVE_TASK } from './taskType'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  taskData: [{
    name: 'shikhar',
    desc: 'hello its is a good task',
    id: uuidv4(),
  }]
}

const editTaskData = (state, data) => {
const updatedData = state?.taskData?.map(element => {
 if( element.id === data.id) {
return data;
 }
 return element;
});
return updatedData;
}
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK: return {
      ...state,
      taskData:[...state.taskData, action.payload]
    }
    case EDIT_TASK: return {
      ...state,
      taskData: editTaskData(state, action.payload)
    }
    case DELETE_TASK: return {
      ...state,
      componentToRender: action.payload
    }

    default: return state
  }
}

export default taskReducer