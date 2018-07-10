import { createSelector } from 'reselect';
import { get, map, defaults, orderBy, kebabCase, keyBy } from 'lodash';
import { getPosterUrl } from './app';

export const getMoviesState = state => get(state, 'movies');

export const getLoading = createSelector([getMoviesState], movies =>
  get(movies, 'loading')
);

export const getError = createSelector([getMoviesState], movies =>
  get(movies, 'error')
);

export const getMoviesModel = createSelector([getMoviesState], movies =>
  get(movies, 'model')
);

export const getMoviesWithPosters = createSelector(
  getMoviesModel,
  (state, props) => ({ state, props }),
  (model, { state, props }) =>
    map(model, movie =>
      defaults(movie, {
        poster: `${getPosterUrl(state, props)}${get(movie, 'poster_path')}`,
        friendlyTitle: kebabCase(get(movie, 'title'))
      })
    )
);

export const getMovies = createSelector(
  [getMoviesWithPosters],
  movies => movies
);

export const getMoviesByIdKey = createSelector([getMovies], movies =>
  keyBy(movies, 'id')
);

export const getMostVotedMovies = createSelector([getMovies], movies =>
  orderBy(movies, ['vote_average'], ['desc'])
);

export const getMovie = createSelector(
  getMoviesByIdKey,
  (state, props) => get(props, ['match', 'params', 'id']),
  (moviesById, movieId) => get(moviesById, movieId) || false
);
