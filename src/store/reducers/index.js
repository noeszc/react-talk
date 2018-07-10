import { combineReducers } from 'redux';
import movies from './movies';
import app from './app';

export default combineReducers({ app, movies });
