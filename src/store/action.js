import {ActionType} from 'Src/const';


export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  genre,
});

export const showMoreMovies = (visibleMoviesCount) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  visibleMoviesCount,
});

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  movies,
});

export const loadMoviePromo = (moviePromo) => ({
  type: ActionType.LOAD_MOVIE_PROMO,
  moviePromo,
});
