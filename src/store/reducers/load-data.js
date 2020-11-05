import {reviews} from 'mocks/movies';
import {ActionType} from 'const';


const initialState = {
  movies: [],
  moviePromo: {},
  reviews,
};

const loadData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign(
          {},
          state,
          {
            movies: action.movies
          });

    case ActionType.LOAD_MOVIE_PROMO:
      return Object.assign(
          {},
          state,
          {
            moviePromo: action.moviePromo
          });
  }

  return state;
};


export default loadData;
