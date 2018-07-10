import { createSelector } from 'reselect';
import { get } from 'lodash';

export const getAppState = state => get(state, 'app');

export const getAppConfigState = createSelector([getAppState], appState =>
  get(appState, 'config')
);

export const getConfigModel = createSelector([getAppConfigState], config =>
  get(config, 'model')
);

export const getImageConfig = createSelector([getConfigModel], model =>
  get(model, 'images')
);

export const getImageBaseUrl = createSelector([getImageConfig], images =>
  get(images, 'base_url')
);

export const getPosters = createSelector([getImageConfig], images =>
  get(images, 'poster_sizes')
);

export const getPosterUrl = createSelector(
  getImageBaseUrl,
  (state, props) => get(props, 'posterSize'),
  (baseUrl, posterSize) => `${baseUrl}${posterSize}`
);
