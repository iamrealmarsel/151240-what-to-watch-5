import {ActionType} from 'const';


const initialState = {
  isAuthenticated: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ENABLE_AUTH:
      return Object.assign(
          {},
          state,
          {
            isAuthenticated: action.status,
          });
  }

  return state;
};


export default user;
