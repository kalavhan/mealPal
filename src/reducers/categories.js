import { act } from "react-dom/test-utils";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      console.log(action.categories);
      return action.categories;
    default:
      return state;
  }
}

export default categoriesReducer;
