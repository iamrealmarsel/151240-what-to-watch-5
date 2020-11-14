import {loadMovies, loadMoviePromo, enableApplication, enableAuth} from 'store/action';
import browserHistory from 'browser-history';

const adaptMovieToClient = (movie) => {
  const adaptedMovie = Object.assign(
      {},
      movie,
      {
        title: movie.name,
        poster: movie.poster_image,
        preview: movie.preview_image,
        background: movie.background_image,
        backgroundColor: movie.background_color,
        previewVideo: movie.preview_video_link,
        video: movie.video_link,
        votes: movie.scores_count,
        runtime: movie.run_time,
        releaseYear: movie.released,
        myList: movie.is_favorite,
      }
  );

  delete adaptedMovie.name;
  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.preview_video_link;
  delete adaptedMovie.video_link;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.run_time;
  delete adaptedMovie.released;
  delete adaptedMovie.is_favorite;

  return adaptedMovie;
};

const fetchMovies = (dispatch, api) => {
  return api.get(`/films`)
    .then(({data}) => {
      const movies = data.map((movie) => adaptMovieToClient(movie));
      dispatch(loadMovies(movies));
    })
    .catch(() => {});
};

const fetchMoviePromo = (dispatch, api) => {
  return api.get(`/films/promo`)
    .then(({data}) => {
      const moviePromo = adaptMovieToClient(data);
      dispatch(loadMoviePromo(moviePromo));
    })
    .catch(() => {});
};

const checkAuth = (dispatch, api) => {
  return api.get(`/login`)
    .then(() => dispatch(enableAuth(true)))
    .catch(() => {});
};

export const init = () => (dispatch, _getState, api) => {
  Promise.all([
    fetchMovies(dispatch, api),
    fetchMoviePromo(dispatch, api),
    checkAuth(dispatch, api)
  ]).then(() => dispatch(enableApplication()));
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(() => dispatch(enableAuth(true)))
    .then(() => browserHistory.push(`/`));
};
