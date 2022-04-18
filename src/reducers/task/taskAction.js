import { SAVE_TASK, DELETE_TASK } from './taskType'

export const saveTaskData = (data) => {
  return {
    type: SAVE_TASK,
    payload: data,
  }
}


export const deleteTaskData = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  }
}