import { combineReducers } from 'redux';
import briefReducer from './briefReducer';

export default combineReducers({
  briefs: briefReducer
});
