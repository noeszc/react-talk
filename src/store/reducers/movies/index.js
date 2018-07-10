import { handleActions } from 'redux-actions';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  SET_MOVIES
} from '../../types/movies';

const initialState = {
  loading: false,
  error: false,
  model: false
};

export const moviesReducer = handleActions(
  {
    [LOAD_MOVIES]: (state, action) => ({
      ...state,
      loading: true,
      error: false,
      model: false
    }),
    [LOAD_MOVIES_SUCCESS]: (state, action) => ({
      ...state,
      loading: false
    }),
    [LOAD_MOVIES_ERROR]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false
    }),
    [SET_MOVIES]: (state, { payload }) => ({ ...state, model: payload })
  },
  initialState
);

export default moviesReducer;
