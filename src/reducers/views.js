const viewsReducer = (state = 'Categories', action) => {
  switch(action.type) {
    case 'SET_VIEW':
      return action.view;
    default:
      return state
  }
}

export default viewsReducer;
