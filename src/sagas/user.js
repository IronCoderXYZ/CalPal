// NPM Imports
import Axios from 'axios';
import { call, put } from 'redux-saga/effects';
// Local Imports
import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS
} from '../actions';

function signinUserDb({ payload }) {
  return Axios.post('http://localhost:3000/users/login', {
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
  return Axios.post('http://localhost:3000/users', {
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
