import // FETCH_FOODS,
// FETCH_FOODS_FAIL,
// FETCH_FOODS_SUCCESS,
'../actions';

const initialState = {
  user: null,
  error: false,
  loading: false,
  loggedIn: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
