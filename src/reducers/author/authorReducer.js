import { DELETE_AUTHOR, SAVE_AUTHOR } from "./authorType";

const initialState = {
  authorData: JSON.parse(localStorage.getItem("authorData")) || [],
};

const saveAuthorData = (state, action) => {
  const updatedData = [...state.authorData, action.payload];
  localStorage.setItem("authorData", JSON.stringify(updatedData));
  return updatedData;
};

const deleteAuthor = (state, id) => {
  const updatedData = state?.authorData?.filter(
    ({ id: elementId }) => elementId !== id
  );
  localStorage.setItem("authorData", JSON.stringify(updatedData));
  return updatedData;
};
const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AUTHOR:
      return {
        ...state,
        authorData: saveAuthorData(state, action),
      };
    case DELETE_AUTHOR:
      return {
        ...state,
        authorData: deleteAuthor(state, action.payload),
      };

    default:
      return state;
  }
};

export default authorReducer;
