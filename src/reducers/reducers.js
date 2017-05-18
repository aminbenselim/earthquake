import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = { data: [], error: null, loading: false };

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return { posts: [], error: null, loading: true };

    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        posts: action.payload,
        error: null,
        loading: false
      };

    case actionTypes.FETCH_DATA_FAILURE:
      return { posts: [], error: action.payload, loading: false };

    default:
      return state;
  }
};

export default data;
