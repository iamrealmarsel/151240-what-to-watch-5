import {reviews} from 'mocks/movies';
import {ALL_GENRES, ActionType, MOVIE_COUNT_STEP} from 'const';


const initialState = {
  currentGenre: ALL_GENRES,
  visibleMoviesCount: MOVIE_COUNT_STEP,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign(
          {},
          state,
          {
            currentGenre: action.genre,
            visibleMoviesCount: MOVIE_COUNT_STEP,
          });

    case ActionType.SHOW_MORE_MOVIES:
      return Object.assign(
          {},
          state,
          {
            visibleMoviesCount: action.visibleMoviesCount,
          });

    case ActionType.LOAD_MOVIES:
      return Object.assign(
          {},
          state,
          {
            movies: action.movies
          });

    case ActionType.LOAD_MOVIE_PROMO:
      return Object.assign(
          {},
          state,
          {
            moviePromo: action.moviePromo
          });
  }

  return state;
};


export default reducer;
