import axios from 'axios';
import { CREATE_CAR } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';

const POSTING_CAR = 'POSTING_CAR';
const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCES';
const CREATE_CAR_ERROR = 'LOGIN_ERROR';

const initialState = {
  loading: false,
  newCar: false,
  error: false,
};

export const createCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_CAR:
      return { ...state, loading: true };

    case CREATE_CAR_SUCCESS:
      return { ...state, loading: false, newCar: true };

    case CREATE_CAR_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const createCarAction = formData => (state, dispatch) => {
  dispatch({ type: POSTING_CAR });
  axios
    .post(CREATE_CAR, formData)
    .then(response => {
      dispatch({
        type: CREATE_CAR_SUCCESS,
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
        type: CREATE_CAR_ERROR,
        payload: errMsg,
      });
    });
};

export default createCarAction;
