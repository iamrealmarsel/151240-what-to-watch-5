import {ALL_GENRES, ActionType, MOVIE_COUNT_STEP} from 'const';


const initialState = {
  currentGenre: ALL_GENRES,
  visibleMoviesCount: MOVIE_COUNT_STEP,
  isEnableMovies: false,
  isEnableMoviePromo: false,
};

const moviesState = (state = initialState, action) => {
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

    case ActionType.ENABLE_MOVIE_PROMO:
      return Object.assign(
          {},
          state,
          {
            isEnableMoviePromo: true,
          });

    case ActionType.ENABLE_MOVIES:
      return Object.assign(
          {},
          state,
          {
            isEnableMovies: true,
          });
  }

  return state;
};


export default moviesState;
