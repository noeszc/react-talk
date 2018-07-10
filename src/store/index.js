import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import appReducer from './reducers';

const configureStore = () => {
  const middlewares = [thunk, logger];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    appReducer,
    appReducer(undefined, {}),
    compose(...enhancers)
  );

  return store;
};

export default configureStore;
