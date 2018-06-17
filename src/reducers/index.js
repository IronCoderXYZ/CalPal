// NPM Imports
import { combineReducers } from 'redux';
// Local Imports
import auth from './auth';
import food from './food';

export default combineReducers({
  food,
  auth
});
