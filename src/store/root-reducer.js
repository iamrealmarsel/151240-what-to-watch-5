import {combineReducers} from 'redux';
import moviesState from './reducers/movies-state';
import loadData from './reducers/load-data';


export default combineReducers({
  data: loadData,
  moviesState,
});
