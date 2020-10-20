import {ActionType} from '../const';


export const changeGenreFilter = (xxx) => ({
  type: ActionType.CHANGE_GENRE_FILTER,
  payload: xxx,
});


// export const ActionCreator = {
//   changeGenreFilter: () => ({
//     type: ActionType.CHANGE_GENRE_FILTER,
//     // payload: ...,
//   }),
//   // getMoviesByGenre: () => ({
//   //   type: ActionType.GET_MOVIES_BY_GENRE,
//   //   // payload: ...,
//   // })
// };
