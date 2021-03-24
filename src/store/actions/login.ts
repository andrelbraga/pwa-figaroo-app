import * as actionTypes from '@/store/actions/actionTypes';

export const setLoginData = (
  loginData: Record<string, unknown>,
): Record<string, unknown> => {
  return {
    type: actionTypes.SET_LOGIN_DATA,
    loginData,
  };
};
