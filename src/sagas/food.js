// NPM Imports
import { put } from 'redux-saga/effects';
// Local Imports
import {
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_FAIL,
  ADD_FOOD_FAIL,
  ADD_FOOD_SUCCESS
} from '../actions';

export function* addFood({ payload }) {
  // const state = yield select();
  // const { foods } = state;
  try {
    // yield localStorage.setItem('foods', JSON.stringify([...foods, payload]));
    // yield put({ type: FETCH_FOODS });

    // Temporary
    yield put({ type: ADD_FOOD_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ADD_FOOD_FAIL, payload: error });
  }
}

export function* fetchFoods(action) {
  try {
    // const foods = yield JSON.parse(localStorage.getItem('foods'));
    yield put({ type: FETCH_FOODS_SUCCESS });
  } catch (error) {
    yield put({ type: FETCH_FOODS_FAIL, payload: error });
  }
}
