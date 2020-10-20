import {movies} from '../mocks/movies';
import {ActionType} from '../const';


const initialState = {
  genre: `all`,
  movies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE_FILTER:
      state.movies.pop();
      return Object.assign({}, state);
  }

  return state;
};


export default reducer;
