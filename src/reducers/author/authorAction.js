import { DELETE_AUTHOR, SAVE_AUTHOR } from './authorType'

export const saveAuthorData = (data) => {
  return {
    type: SAVE_AUTHOR,
    payload: data,
  }
}

export const deleteAuthorData = (id) => {
  return {
    type: DELETE_AUTHOR,
    payload: id,
  }
}