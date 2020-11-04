import { LOGIN } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';
import axios from 'axios';

const LOGIN_LOADING = 'LOGIN_LOADING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const initialState = {
  loading: false,
  login: false,
  error: false,
  user: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, login: true, user: action.payload };

    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

const loginAction = formData => (dispatch, getState) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axios
    .post(LOGIN, formData)
    .then(response => {
      if (response.ok) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data.results,
        });
      }
    })
    .catch(error => {
      let errMsg;
      try {
        errMsg = error.response.data;
      } catch {
        errMsg = SERVER_LOST;
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: errMsg,
      });
    });
  return getState;
};

export default loginAction;
