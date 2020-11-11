import {ALL_GENRES, ActionType, MOVIE_COUNT_STEP} from 'const';


const initialState = {
  currentGenre: ALL_GENRES,
  visibleMoviesCount: MOVIE_COUNT_STEP,
  isApplicationReady: false,
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

    case ActionType.ENABLE_APPLICATION:
      return Object.assign(
          {},
          state,
          {
            isApplicationReady: true,
          });
  }

  return state;
};


export default moviesState;
