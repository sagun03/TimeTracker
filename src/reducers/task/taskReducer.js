import { DELETE_TASK, SAVE_TASK } from './taskType'

const initialState = {
  taskData: JSON.parse(localStorage.getItem("taskData")) || [],
}

const saveTaskData = (state, action) => {
  const updatedData = [...state.taskData, action.payload];
  localStorage.setItem("taskData", JSON.stringify(updatedData));
  return updatedData;
};
const deleteTask = (state, id) => {
  const updatedData = state?.taskData?.filter(
    ({ id: elementId }) => elementId !== id
  );
  localStorage.setItem("taskData", JSON.stringify(updatedData));
  return updatedData;
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TASK: return {
      ...state,
      taskData: saveTaskData(state, action)
    }
    case DELETE_TASK: return {
      ...state,
      taskData: deleteTask(state, action.payload)
    }

    default: return state
  }
}

export default taskReducer