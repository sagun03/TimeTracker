import { EDIT_AUTHOR, SAVE_AUTHOR } from './authorType'

export const saveAuthorData = (data) => {
  return {
    type: SAVE_AUTHOR,
    payload: data,
  }
}


export const editAuthorData = (data) => {
  return {
    type: EDIT_AUTHOR,
    payload: data,
  }
}