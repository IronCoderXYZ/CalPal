// NPM Imports
import Axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
// Local Imports
import {
  FETCH_FOODS,
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_FAIL,
  ADD_FOOD_FAIL,
  ADD_FOOD_SUCCESS
} from '../actions';

// function updateFoodFromDb(payload, _id) {
//   return Axios.update(`http://localhost:3000/foods/${_id}`, {
//     name: payload.name,
//     calories: payload.calories
//   });
// }

function deleteFoodFromDb(_id) {
  return Axios.delete(`http://localhost:3000/foods/${_id}`);
}

function addFoodToDb(payload, _id) {
  return Axios.post('http://localhost:3000/foods', {
    author: _id,
    name: payload.name,
    calories: payload.calories
  });
}

function fetchFoodsFromDb(_id) {
  return Axios.get(`http://localhost:3000/foods/${_id}`);
}

// export function* updateFood({ payload }) {
//   try {
//     const request = yield call(updateFoodFromDb, payload);
//     yield put({ type: FETCH_FOODS });
//   } catch (error) {
//     yield put({ type: FETCH_FOODS_FAIL, payload: error });
//   }
// }

export function* deleteFood({ payload }) {
  try {
    const request = yield call(deleteFoodFromDb, payload);
    yield put({ type: FETCH_FOODS });
  } catch (error) {
    yield put({ type: FETCH_FOODS_FAIL, payload: error });
  }
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
    const state = yield select();
    const { _id } = state.auth;
    const request = yield call(fetchFoodsFromDb, _id);
    yield put({ type: FETCH_FOODS_SUCCESS, payload: request.data });
  } catch (error) {
    yield put({ type: FETCH_FOODS_FAIL, payload: error });
  }
}
