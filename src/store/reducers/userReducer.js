//import { getUserInfo } from "user/helper/userapicall";

let initialState = {
  user: {}
};

function userReducer(state = initialState, action) {
  if (action.type === "GET_USER_INFO") {
    return {
      ...state,
      user: action.payload
    };
  }
  if (action.type === "GET_UPDATED_USER") {
    return {
      ...state,
      user: action.payload
    };
  }
  if (action.type === "LOGOUT_CURRENT_USER") {
    return {
      ...state,
      user: {}
    };
  }
  return state;
}

export default userReducer;
