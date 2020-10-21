import {ActionType} from '../const';


export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  genre,
});
