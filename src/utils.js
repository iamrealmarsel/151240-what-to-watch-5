import {ALL_GENRES} from './const.js';


export const getMyList = (movies) => {
  return movies.filter((movie) => movie.myList);
};

export const getAlikeMovies = (movies, currentMovie) => {
  const totalAlikeMovies =
    movies.filter((movie) => movie.id !== currentMovie.id && movie.genre === currentMovie.genre);

  if (totalAlikeMovies.length <= 4) {
    return totalAlikeMovies;
  }

  let alikeMovies = [];

  for (let i = 0; i < 0; i++) {
    alikeMovies.push(totalAlikeMovies[i]);
  }

  return alikeMovies;
};

export const generateId = () => Math.round(Date.now() * Math.random());

export const convertMinutesToHoursAndMinutes = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = (totalMinutes - minutes) / 60;

  return `${hours}h ${minutes}m`;
};


export const getGenres = (movies) => {
  const genres = movies.map((movie) => movie.genre);

  return [ALL_GENRES, ...new Set(genres)];
};

