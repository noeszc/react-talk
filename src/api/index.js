import MovieDB from 'moviedb-promise';
import { MOVIE_DB_API_KEY } from './config';

const api = new MovieDB(MOVIE_DB_API_KEY);

const getConfig = () => api.configuration();

const getMovies = () => api.discoverMovie();

const getMovieTrailers = movieId => api.movieTrailers(movieId);
const getRelatedMovies = movieId => api.movieSimilar(movieId);

export default { getConfig, getMovies, getMovieTrailers, getRelatedMovies };
