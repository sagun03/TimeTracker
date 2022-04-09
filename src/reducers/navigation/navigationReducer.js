import { NAVIGATE } from './navigationType'

const initialState = {
  componentToRender: 'Author'
}

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE: return {
      ...state,
      componentToRender: action.payload
    }

    default: return state
  }
}

export default navigationReducer