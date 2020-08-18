import { applyMiddleware, combineReducers, createStore } from 'redux';
import { loggedUserReducer } from './loggedUser/reducer';
import thunkMiddleware from 'redux-thunk';
import { User } from 'models/User';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface GlobalState {
  loggedUser: User;
}

const appReducer = combineReducers({
  loggedUser: loggedUserReducer,
});

const reducer = (state, action): GlobalState => {
  return appReducer(state, action);
};

// eslint-disable-next-line
export const configureStore = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
