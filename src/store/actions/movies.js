import { createAction } from 'redux-actions';
import { get } from 'lodash';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  SET_MOVIES
} from '../types/movies';
import api from '../../api';

export const loadMovies = createAction(LOAD_MOVIES);

export const moviesLoaded = createAction(LOAD_MOVIES_SUCCESS);

export const moviesLoadingError = createAction(LOAD_MOVIES_ERROR);

export const setMovies = createAction(SET_MOVIES);

export const loadAsyncMovies = () => async dispatch => {
  dispatch(loadMovies());
  try {
    const response = await api.getMovies();
    const movies = get(response, 'results');
    dispatch(moviesLoaded());
    dispatch(setMovies(movies));
  } catch (error) {
    dispatch(moviesLoadingError(error));
  }
};
