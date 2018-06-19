import {
  ADD_USER,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  SIGNIN_USER,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  UPDATE_CALORIES,
  UPDATE_CALORIES_FAIL,
  UPDATE_CALORIES_SUCCESS,
  UPDATE_GOAL,
  UPDATE_GOAL_FAIL,
  UPDATE_GOAL_SUCCESS
} from '../actions';

const initialState = {
  _id: null,
  email: null,
  token: null,
  error: false,
  loading: false,
  calorieGoal: 0,
  loggedIn: false,
  consumedCalories: 0
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
        token: payload.token,
        _id: payload.user._id,
        email: payload.user.email,
        calorieGoal: payload.user.calorieGoal,
        consumedCalories: payload.user.consumedCalories
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
        token: payload.token,
        _id: payload.user._id,
        email: payload.user.email,
        calorieGoal: payload.user.calorieGoal,
        consumedCalories: payload.user.consumedCalories
      };
    case UPDATE_GOAL:
    case UPDATE_CALORIES:
      return {
        ...state,
        loading: true
      };
    case UPDATE_GOAL_FAIL:
    case UPDATE_CALORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error, please try again'
      };
    case UPDATE_CALORIES_SUCCESS:
      return {
        ...state,
        consumedCalories: payload.consumedCalories
      };
    case UPDATE_GOAL_SUCCESS:
      return {
        ...state,
        calorieGoal: payload.calorieGoal
      };
  }
};
