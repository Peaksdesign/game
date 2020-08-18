import { User } from 'models/User';

export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const CLEAR_LOGGED_USER = 'CLEAR_LOGGED_USER';

export interface SetLoggedUserAction {
  type: typeof SET_LOGGED_USER;
  payload: User;
}

export interface ClearLoggedUserAction {
  type: typeof CLEAR_LOGGED_USER;
}

export type LoggedUserActionTypes = SetLoggedUserAction | ClearLoggedUserAction;
