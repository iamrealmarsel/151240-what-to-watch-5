import {combineReducers} from 'redux';
import moviesState from 'store/reducers/movies-state';
import loadData from 'store/reducers/load-data';
import user from 'store/reducers/user';


export default combineReducers({
  data: loadData,
  moviesState,
  user,
});
