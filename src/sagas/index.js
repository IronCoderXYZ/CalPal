// NPM Imports
import { takeEvery } from 'redux-saga/effects';
// Local Imports
import { addUser, signinUser } from './user';
import { addFood, fetchFoods, deleteFood, updateFood } from './food';
import {
  FETCH_FOODS,
  ADD_FOOD,
  DELETE_FOOD,
  // UPDATE_FOOD,
  ADD_USER,
  SIGNIN_USER
} from '../actions';

function* rootSaga() {
  yield takeEvery(ADD_FOOD, addFood);
  yield takeEvery(ADD_USER, addUser);
  yield takeEvery(DELETE_FOOD, deleteFood);
  // yield takeEvery(UPDATE_FOOD, updateFood);
  yield takeEvery(FETCH_FOODS, fetchFoods);
  yield takeEvery(SIGNIN_USER, signinUser);
}

export default rootSaga;
