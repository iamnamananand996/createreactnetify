let initialState = {
  hackathons: []
};

function hackathonsReducer(state = initialState, action) {
  if (action.type === "GET_ALL_HACKATHONS") {
    return {
      ...state,
      hackathons: action.payload
    };
  }
  return state;
}

export default hackathonsReducer;
