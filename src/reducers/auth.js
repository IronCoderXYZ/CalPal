import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  SIGNIN_USER,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS
} from '../actions';

const initialState = {
  _id: null,
  email: null,
  error: false,
  loading: false,
  loggedIn: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case ADD_USER:
      return { ...initialState, loading: true };
    case ADD_USER_FAIL: //Payload in error
      return {
        ...initialState,
        error: 'Error, please check your input and try again'
      };
    case ADD_USER_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
        _id: payload._id,
        email: payload.email
      };
    case SIGNIN_USER:
      return {
        ...initialState,
        loading: true
      };
    case SIGNIN_USER_FAIL:
      return {
        ...initialState,
        error: 'Error, please check your input and try again'
      };
    case SIGNIN_USER_SUCCESS:
      return {
        ...initialState,
        loggedIn: true,
        _id: payload._id,
        email: payload.email
      };
  }
};
