import {movies, reviews} from '../mocks/movies';
import {ALL_GENRES, ActionType} from '../const';


const initialState = {
  currentGenre: ALL_GENRES,
  promoMovie: movies[0],
  movies,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:

      return Object.assign({}, state, {currentGenre: action.genre});
  }

  return state;
};


export default reducer;
