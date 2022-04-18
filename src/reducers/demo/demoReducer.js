import { DELETE_DEMO, SAVE_DEMO, UPDATE_DEMO } from "./demoType";

const initialState = {
  demoData:  JSON.parse(localStorage.getItem("demoData")) || [],
};

const saveDemoData = (state, action) => {
  const updatedData = [...state.demoData, action.payload];
  localStorage.setItem("demoData", JSON.stringify(updatedData));
  return updatedData;
};
const deleteDemo = (state, id) => {
  console.log(state, id)
  const updatedData = state?.demoData?.filter(
    ({ id: elementId }) => elementId !== id
  );
  localStorage.setItem("demoData", JSON.stringify(updatedData));
  return updatedData;
};
const updateDemo = (state, data) => {
  const updatedData = state?.demoData?.map(element => {
    console.log(element.id, data.id)
    if (element.id === data.id ) {
      element.time = data.time;
    }
    return element;
  });

  localStorage.setItem("demoData", JSON.stringify(updatedData));
  return updatedData;
};
const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DEMO:
      return {
        ...state,
        demoData:saveDemoData(state, action),
      };
    case DELETE_DEMO:
      return {
        ...state,
        demoData:  deleteDemo(state, action.payload),
      };
      case UPDATE_DEMO:
        return {
          ...state,
          demoData: updateDemo(state, action.payload),
        };
    default:
      return state;
  }
};

export default demoReducer;
