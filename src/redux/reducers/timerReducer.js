import { RESET_TIMER, SET_TIMER } from '../actionTypes';

const timerReducer = (state = '', action) => {
  switch(action.type) {
    case SET_TIMER:
      return action.payload;
    case RESET_TIMER:
      return '';
    default:
      return state;
  }
}

export default timerReducer;