import { DELETE_DEMO, SAVE_DEMO, UPDATE_DEMO } from './demoType'

export const saveDemoData = (data) => {
  return {
    type: SAVE_DEMO,
    payload: data,
  }
}

export const deleteDemoData = (id) => {
  return {
    type: DELETE_DEMO,
    payload: id,
  }
}
export const updateDemoData = (data) => {
  return {
    type: UPDATE_DEMO,
    payload: data,
  }
}