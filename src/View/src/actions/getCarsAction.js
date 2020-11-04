import { GET_CARS } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';
import axios from 'axios';

const GETTING_CARS = 'GETTING_CARS';
const GET_CARS_SUCCESS = 'GET_CAR_SUCCES';
const GET_CARS_ERROR = 'LOGIN_ERROR';

const initialState = {
  loading: false,
  cars: [],
  error: false,
};

export const getCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_CARS:
      return { ...state, loading: true };

    case GET_CARS_SUCCESS:
      return { ...state, loading: false, newCar: true };

    case GET_CARS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const getCarsAction = formData => (state, dispatch) => {
  dispatch({
    type: GETTING_CARS,
  });
  axios
    .post(GET_CARS, formData)
    .then(response => {
      if (response.ok) {
        dispatch({
          type: GET_CARS_SUCCESS,
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
        type: GET_CARS_ERROR,
        payload: errMsg,
      });
    });
  return state;
};

export default getCarsAction;
