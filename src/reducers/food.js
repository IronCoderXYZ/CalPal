import {
  FETCH_FOODS,
  FETCH_FOODS_FAIL,
  FETCH_FOODS_SUCCESS,
  ADD_FOOD,
  ADD_FOOD_FAIL,
  ADD_FOOD_SUCCESS
} from '../actions';

const initialState = {
  error: false,
  loading: false,
  items: [{ name: 'Beef', calories: 1.98 }, { name: 'Chicken', calories: 2.95 }]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case ADD_FOOD:
    case FETCH_FOODS:
      return { ...state, loading: true };
    case ADD_FOOD_FAIL:
    case FETCH_FOODS_FAIL:
      return { ...state, loading: false, error: payload };
    case FETCH_FOODS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false
        // foods:
      };
    case ADD_FOOD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        items: [...state.items, payload]
      };
  }
};
