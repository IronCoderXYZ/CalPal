// NPM Imports
import Axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
// Local Imports
import {
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_FAIL,
  ADD_FOOD_FAIL,
  ADD_FOOD_SUCCESS
} from '../actions';

function addFoodToDb(payload, _id) {
  return Axios.post('http://localhost:3000/foods', {
    author: _id,
    name: payload.name,
    calories: payload.calories
  });
}

export function* addFood({ payload }) {
  try {
    const state = yield select();
    const { _id } = state.auth;
    const request = yield call(addFoodToDb, payload, _id);
    yield put({ type: ADD_FOOD_SUCCESS, payload: request.data });
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
