import { RESET_SNEAK_MODE, SET_SNEAK_MODE } from '../actionTypes';

const sneakModeReducer = (state = false, action) => {
  switch(action.type) {
    case SET_SNEAK_MODE:
      return !state;
    case RESET_SNEAK_MODE:
      return false;
    default:
      return state;
  }
}

export default sneakModeReducer;