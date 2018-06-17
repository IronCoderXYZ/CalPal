// NPM Imports
import Axios from 'axios';
import { call, put, takeEvery, select } from 'redux-saga/effects';
// Local Imports
import {
  FETCH_FOODS,
  FETCH_FOODS_SUCCESS,
  FETCH_FOODS_FAIL,
  ADD_FOOD,
  ADD_FOOD_FAIL,
  ADD_FOOD_SUCCESS,
  // User
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS
} from '../actions';

function addUserToDb(payload) {
  return Axios.post('http://localhost:3000/users', {
    email: payload.email,
    password: payload.password
  });
}

function* addUser({ payload }) {
  try {
    const request = yield call(addUserToDb, payload);
    yield put({ type: ADD_USER_SUCCESS, payload: request.data });
  } catch (error) {
    yield put({ type: ADD_USER_FAIL, payload: error });
  }
}

function* addFood({ payload }) {
  const state = yield select();
  const { foods } = state;
  try {
    // yield localStorage.setItem('foods', JSON.stringify([...foods, payload]));
    // yield put({ type: FETCH_FOODS });

    // Temporary
    yield put({ type: ADD_FOOD_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ADD_FOOD_FAIL, payload: error });
  }
}

function* fetchFoods(action) {
  try {
    // const foods = yield JSON.parse(localStorage.getItem('foods'));
    yield put({ type: FETCH_FOODS_SUCCESS });
  } catch (error) {
    yield put({ type: FETCH_FOODS_FAIL, payload: error });
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_FOODS, fetchFoods);
  yield takeEvery(ADD_FOOD, addFood);
  yield takeEvery(ADD_USER, addUser);
}

export default rootSaga;
