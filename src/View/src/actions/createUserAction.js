import { CREATE_USER } from '../constants/routes';
import axios from 'axios';

const initialState = {
  fetching: false,
  newUser: null,
  error: null,
};

const POSTING_USER = 'POSTING_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_USER:
      return { ...state, fetching: true };
    case CREATE_USER_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, fetching: false, newUser: action.payload };
    default:
      return { ...state };
  }
};

const createUserAction = formData => dispatch => {
  dispatch({ type: POSTING_USER });
  axios
    .post(CREATE_USER, formData)
    .then(response => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data.results,
      });
    })
    .catch(error => {
      dispatch({
        type: CREATE_USER_ERROR,
        payload: error.response.data,
      });
    });
};

export default createUserAction;
