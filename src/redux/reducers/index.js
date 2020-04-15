import { combineReducers } from 'redux';
import fartReducer from './fartReducer';
import sneakModeReducer from './sneakModeReducer'
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  fartReducer,
  sneakModeReducer,
  timerReducer
});

export default rootReducer;