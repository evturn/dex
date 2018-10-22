import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  items: [],
  results: [],
};

function thunk({ dispatch, getState }) {
  return next => action => {
    return typeof action === 'function'
      ? action(dispatch, getState)
      : next(action);
  };
}

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
