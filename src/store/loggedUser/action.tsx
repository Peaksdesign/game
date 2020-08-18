import { CLEAR_LOGGED_USER, SET_LOGGED_USER } from './actionTypes';
import { UserResponseData } from 'models/User';

export const loginUserWithPassword = (user: UserResponseData) => {
  return {
    type: SET_LOGGED_USER,
    payload: user.authenticateUserWithPassword.item.name,
  };
};

export const clearLoggedUser = () => {
  return {
    type: CLEAR_LOGGED_USER,
  };
};
