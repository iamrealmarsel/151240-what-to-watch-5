import {movies as mockMovies} from '../mocks/movies';
import {ALL_GENRES, ActionType} from '../const';


const initialState = {
  currentGenre: ALL_GENRES,
  movies: mockMovies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:

      return Object.assign({}, state, {currentGenre: action.genre});
  }

  return state;
};


export default reducer;
