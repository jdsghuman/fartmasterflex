import { combineReducers } from 'redux';
import fartReducer from './fartReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  fartReducer,
  timerReducer
});

export default rootReducer;