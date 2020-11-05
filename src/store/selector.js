import {ALL_GENRES, ALIKE_MOVIE_COUNT, RatingText} from 'Src/const';


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

export const convertMinutesToHoursAndMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = (totalMinutes - minutes) / 60;

  return `${hours}h ${minutes}m`;
};

export const convertRatingToText = (rating) => {
  if (rating >= 0 && rating < 3) {
    return RatingText.BAD;
  }

  if (rating >= 3 && rating < 5) {
    return RatingText.NORMAL;
  }

  if (rating >= 5 && rating < 8) {
    return RatingText.GOOD;
  }

  if (rating >= 8 && rating < 10) {
    return RatingText.VERY_GOOD;
  }

  if (rating === 10) {
    return RatingText.AWESOME;
  }

  return null;
};
