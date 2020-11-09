import { CREATE_USER } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';
import axios from 'axios';

const initialState = {
  loading: false,
  user: null,
  error: {
    username: null,
    email: null,
  },
};

const POSTING_USER = 'POSTING_USER';
const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_USER:
      return { ...state, loading: true };
    case CREATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, loading: false, error: initialState.error, user: action.payload };
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
        type: CREATE_USER_ERROR,
        payload: errMsg,
      });
    });
};

export default createUserAction;
