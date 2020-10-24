import {ALL_GENRES} from './const';


export const generateId = () => Math.round(Date.now() * Math.random());

export const convertMinutesToHoursAndMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = (totalMinutes - minutes) / 60;

  return `${hours}h ${minutes}m`;
};

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
