import {movies as mockMovies} from '../mocks/movies';
import {ALL_GENRES, ActionType} from '../const';


const getGenres = (movies) => {
  const genres = movies.map((movie) => movie.genre);

  return [ALL_GENRES, ...new Set(genres)];
};

const getMoviesByGenre = (movies, genre) => {
  if (genre === ALL_GENRES) {
    return movies;
  }

  return movies.filter((movie) => movie.genre === genre);
};

const initialState = {
  currentGenre: ALL_GENRES,
  genres: getGenres(mockMovies),
  moviesByGenre: mockMovies,
  movies: mockMovies,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      const moviesByGenre = getMoviesByGenre(state.movies, action.genre);

      return Object.assign({}, state, {moviesByGenre, currentGenre: action.genre});
  }

  return state;
};


export default reducer;
