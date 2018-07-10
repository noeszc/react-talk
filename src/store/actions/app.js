import { createAction } from 'redux-actions';
import {
  APP_START,
  LOAD_APP_CONFIG,
  LOAD_APP_CONFIG_ERROR,
  LOAD_APP_CONFIG_SUCCESS,
  SET_APP_CONFIG
} from '../types/app';
import api from '../../api';
import { loadAsyncMovies } from './movies';

export const appStart = createAction(APP_START);

export const loadApiConfig = createAction(LOAD_APP_CONFIG);

export const apiConfigLoaded = createAction(LOAD_APP_CONFIG_SUCCESS);

export const apiConfigLoadingError = createAction(LOAD_APP_CONFIG_ERROR);

export const setAppConfig = createAction(SET_APP_CONFIG);

export const bootstrapApp = () => dispatch => {
  dispatch(appStart());
  dispatch(loadAsyncAppConfig());
};

export const loadAsyncAppConfig = () => async dispatch => {
  dispatch(loadApiConfig());
  try {
    const response = await api.getConfig();
    dispatch(apiConfigLoaded());
    dispatch(setAppConfig(response));
    dispatch(loadAsyncMovies());
  } catch (error) {
    dispatch(apiConfigLoadingError(error));
  }
};


