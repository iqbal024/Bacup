import { userConstants } from "../constants";

export function setUser(user) {
  return { type: userConstants.LOGIN_SUCCESS, user };
}

export function logout() {
  localStorage.removeItem("TOKEN");

  return { type: userConstants.LOGOUT };
}
