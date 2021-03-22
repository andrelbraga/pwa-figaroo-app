import * as actionTypes from "./actionTypes";

export const setLoginData = (loginData: object): object => {
  return {
    type: actionTypes.SET_LOGIN_DATA,
    loginData,
  };
};
