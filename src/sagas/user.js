// NPM Imports
import Axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
// Local Imports
import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  UPDATE_GOAL_FAIL,
  SIGNIN_USER_SUCCESS,
  UPDATE_GOAL_SUCCESS,
  UPDATE_CALORIES_FAIL,
  UPDATE_CALORIES_SUCCESS
} from '../actions';

function updateGoalDb(payload, _id, token) {
  return Axios({
    method: 'POST',
    headers: { 'x-auth': token },
    data: { _id, goal: payload },
    url: 'https://calpal-1992.herokuapp.com/users/me/goal'
  });
}

export function* updateGoal({ payload }) {
  try {
    const state = yield select();
    const { _id, token } = state.auth;
    const request = yield call(updateGoalDb, payload, _id, token);
    yield put({
      type: UPDATE_GOAL_SUCCESS,
      payload: request.data.goal
    });
  } catch (error) {
    yield put({ type: UPDATE_GOAL_FAIL, payload: error });
  }
}

function updateCaloriesDb(payload, _id, token) {
  return Axios({
    method: 'POST',
    headers: { 'x-auth': token },
    data: { _id, calories: payload },
    url: 'https://calpal-1992.herokuapp.com/users/me/consumed'
  });
}

export function* updateCalories({ payload }) {
  try {
    const state = yield select();
    const { _id, token } = state.auth;
    const request = yield call(updateCaloriesDb, payload, _id, token);

    yield put({
      type: UPDATE_CALORIES_SUCCESS,
      payload: request.data.consumed
    });
  } catch (error) {
    yield put({ type: UPDATE_CALORIES_FAIL, payload: error });
  }
}

function signinUserDb({ payload }) {
  return Axios.post('https://calpal-1992.herokuapp.com/users/login', {
    email: payload.email,
    password: payload.password
  });
}

export function* signinUser(payload) {
  try {
    const request = yield call(signinUserDb, payload);
    yield put({ type: SIGNIN_USER_SUCCESS, payload: request.data });
  } catch (error) {
    yield put({ type: SIGNIN_USER_FAIL, payload: error });
  }
}

function addUserToDb(payload) {
  return Axios.post('https://calpal-1992.herokuapp.com/users', {
    email: payload.email,
    password: payload.password
  });
}

export function* addUser({ payload }) {
  try {
    const request = yield call(addUserToDb, payload);
    yield put({ type: ADD_USER_SUCCESS, payload: request.data });
  } catch (error) {
    yield put({ type: ADD_USER_FAIL, payload: error });
  }
}
