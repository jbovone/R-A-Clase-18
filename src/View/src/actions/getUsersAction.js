import { GET_USERS } from '../constants/routes';
import axios from 'axios';

const GETTING_USERS = 'GETTING_USERS';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_ERROR = 'GET_USERS_ERROR';

const initialState = {
  loading: false,
  users: [],
  error: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_USERS:
      return { ...state, loading: true };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, login: true, user: action.payload };

    case GET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

const usersAction = formData => (dispatch, getState) => {
  dispatch({
    type: GETTING_USERS,
  });
  axios
    .post(GET_USERS, formData)
    .then(response => {
      if (response.ok) {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: response.data.results,
        });
      }
    })
    .catch(error => {
      dispatch({
        type: GET_USERS_ERROR,
        payload: error.response.data,
      });
    });
  return getState;
};

export default usersAction;
