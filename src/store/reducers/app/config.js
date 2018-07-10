import { handleActions } from 'redux-actions';
import {
  LOAD_APP_CONFIG,
  LOAD_APP_CONFIG_ERROR,
  LOAD_APP_CONFIG_SUCCESS,
  SET_APP_CONFIG
} from '../../types/app';

const initialState = {
  loading: false,
  error: false,
  model: []
};

export const configReducer = handleActions(
  {
    [LOAD_APP_CONFIG]: (state, action) => ({
      ...state,
      loading: true,
      error: false,
      model: []
    }),
    [LOAD_APP_CONFIG_SUCCESS]: (state, action) => ({
      ...state,
      loading: false
    }),
    [LOAD_APP_CONFIG_ERROR]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false
    }),
    [SET_APP_CONFIG]: (state, { payload }) => ({ ...state, model: payload })
  },
  initialState
);

export default configReducer;
