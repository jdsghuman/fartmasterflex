import { RESET_FART, SET_FART } from '../actionTypes';

const fartReducer = (state = '', action) => {
  switch(action.type) {
    case SET_FART:
      return action.payload;
    case RESET_FART:
      return '';
    default:
      return state;
  }
}

export default fartReducer;