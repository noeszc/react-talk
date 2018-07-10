import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';

const configureStore = () => {
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false
        })
      : compose;

  const store = createStore(
    appReducer,
    appReducer(undefined, {}),
    composeEnhancers(...enhancers)
  );

  return store;
};

export default configureStore;
