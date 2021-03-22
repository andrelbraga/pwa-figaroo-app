import * as actionTypes from "@/store/actions/actionTypes";
import { updateObject } from "@/store/updateObject";

const INITIAL_STATE = {
  username: "oiii",
  password: "",
};

const setLoginData = (state = INITIAL_STATE, action: any) => {
  return updateObject(state, action.loginData);
};

const loginHandler = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_DATA:
      return setLoginData(state, action);
    default:
      return state;
  }
};

export default loginHandler;
