import { LOGIN, LOGOUT } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';
import axios from 'axios';

const LOGIN_LOADING = 'LOGIN_LOADING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const initialState = {
  loading: false,
  login: false,
  error: null,
  user: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, login: true, user: action.payload, error: false };

    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT_SUCCESS:
      return { ...initialState };

    default:
      return { ...state };
  }
};

const loginAction = formData => (dispatch, getState) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axios
    .post(LOGIN, formData, {
      useCredentials: true,
    })
    .then(response => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
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

export const logoutAction = _ => (dispatch, getState) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  axios
    .post(LOGOUT, {
      useCredentials: true,
    })
    .then(_ => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
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
