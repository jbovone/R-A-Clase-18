import { GET_BY_ID } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';
import axios from 'axios';

const initialState = {
  loading: false,
  user: {},
  error: null,
};

const GETTING_USER_DATA = 'GETTING_USER_DATA';
const GETTING_USER_DATA_ERROR = 'GETTING_USER_DATA_ERROR';
const GETTING_USER_DATA_SUCCESS = 'GETTING_USER_DATA_SUCCESS';

export const getUserById = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_USER_DATA:
      return { ...state, loading: true };
    case GETTING_USER_DATA_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case GETTING_USER_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

const createUserAction = id => dispatch => {
  dispatch({ type: GETTING_USER_DATA });
  axios
    .get(GET_BY_ID(id))
    .then(response => {
      dispatch({
        type: GETTING_USER_DATA_SUCCESS,
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
        type: GETTING_USER_DATA_ERROR,
        payload: errMsg,
      });
    });
};

export default createUserAction;
