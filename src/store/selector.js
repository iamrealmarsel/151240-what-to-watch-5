import {ALL_GENRES, ALIKE_MOVIE_COUNT} from 'Src/const';


export const getMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

export const getGenres = (movies) => {
  const genres = movies.map((movie) => movie.genre);

  return [ALL_GENRES, ...new Set(genres)];
};

export const getVisibleMovies = (movies, visibleMoviesCount) => {
  const visibleMovies = movies.slice(0, visibleMoviesCount);

  return visibleMovies;
};

export const isEnableShowMoreButton = (movies, visibleMoviesCount) => movies.length > visibleMoviesCount;

export const getAlikeMovies = (movies, currentMovie) => {
  const totalAlikeMovies =
    movies.filter((movie) => movie.id !== currentMovie.id && movie.genre === currentMovie.genre);

  if (totalAlikeMovies.length <= ALIKE_MOVIE_COUNT) {
    return totalAlikeMovies;
  }

  let alikeMovies = [];

  for (let i = 0; i < ALIKE_MOVIE_COUNT; i++) {
    alikeMovies.push(totalAlikeMovies[i]);
  }

  return alikeMovies;
};
