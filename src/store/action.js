import {ActionType} from 'Src/const';


export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  genre,
});

export const showMoreMovies = (visibleMoviesCount) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  visibleMoviesCount,
});
