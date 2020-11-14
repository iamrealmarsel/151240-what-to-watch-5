import {ActionType} from 'const';


export const enableAuth = (status) => ({
  type: ActionType.ENABLE_AUTH,
  status
});
