import {
  LoggedUserActionTypes,
  SET_LOGGED_USER,
  CLEAR_LOGGED_USER,
} from './actionTypes';

export const loggedUserReducer = (
  state = null,
  action: LoggedUserActionTypes
) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return {
        name: action.payload,
      };

    case CLEAR_LOGGED_USER:
      return null;

    default:
      return state;
  }
};
