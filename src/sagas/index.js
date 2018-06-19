// NPM Imports
import { takeEvery } from 'redux-saga/effects';
// Local Imports
import { addFood, fetchFoods, deleteFood, updateFood } from './food';
import { addUser, signinUser, updateCalories, updateGoal } from './user';
import {
  FETCH_FOODS,
  ADD_FOOD,
  DELETE_FOOD,
  // UPDATE_FOOD,
  UPDATE_CALORIES,
  ADD_USER,
  SIGNIN_USER,
  UPDATE_GOAL
} from '../actions';

function* rootSaga() {
  // User
  yield takeEvery(ADD_FOOD, addFood);
  yield takeEvery(DELETE_FOOD, deleteFood);
  yield takeEvery(FETCH_FOODS, fetchFoods);
  // yield takeEvery(UPDATE_FOOD, updateFood);

  // Food
  yield takeEvery(ADD_USER, addUser);
  yield takeEvery(UPDATE_GOAL, updateGoal);
  yield takeEvery(SIGNIN_USER, signinUser);
  yield takeEvery(UPDATE_CALORIES, updateCalories);
}

export default rootSaga;
