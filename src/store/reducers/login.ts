import * as actionTypes from '@/store/actions/actionTypes';
import { updateObject } from '@/store/updateObject';

const INITIAL_STATE = {
  username: '',
  password: '',
  document: '',
  name: '',
  surName: '',
  lastName: '',
  email: '',
  phone: '',
  isAuthenticated: false,
  skills: [],
};

const setLoginData = (state = INITIAL_STATE, action: any) => {
  return updateObject(state, action.loginData);
};

const loginHandler = (
  state = INITIAL_STATE,
  action: Record<string, unknown>,
): any => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_DATA:
      return setLoginData(state, action);
    default:
      return state;
  }
};

export default loginHandler;
