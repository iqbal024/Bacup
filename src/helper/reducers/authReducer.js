import jwt_decode from "jwt-decode";

import { userConstants } from "../constants";

let user = null;

if (localStorage.getItem("TOKEN")) {
  user = jwt_decode(localStorage.getItem("TOKEN"));
}

const initialState = user
  ? { loggedIn: true, user }
  : { loggedIn: false, user: null };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return { loggedIn: false, user: null };
    case userConstants.LOGOUT:
      return { loggedIn: false, user: null };
    default:
      return state;
  }
}
