import { EDIT_TASK, SAVE_TASK } from './taskType'

export const saveTaskData = (data) => {
  return {
    type: SAVE_TASK,
    payload: data,
  }
}


export const editTaskData = (data) => {
  return {
    type: EDIT_TASK,
    payload: data,
  }
}