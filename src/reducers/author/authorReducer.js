import { DELETE_AUTHOR, EDIT_AUTHOR, SAVE_AUTHOR } from './authorType'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  authorData: [{
    name: 'shikhar',
    email: 'shikhar12@gmail.com',
    id: uuidv4(),
  }]
}

const editAuthorData = (state, data) => {
const updatedData = state?.authorData?.map(element => {
 if( element.id === data.id) {
return data;
 }
 return element;
});
return updatedData;
}
const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AUTHOR: return {
      ...state,
      authorData:[...state.authorData, action.payload]
    }
    case EDIT_AUTHOR: return {
      ...state,
      authorData: editAuthorData(state, action.payload)
    }
    case DELETE_AUTHOR: return {
      ...state,
      componentToRender: action.payload
    }

    default: return state
  }
}

export default authorReducer;