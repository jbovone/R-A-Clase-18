import axios from 'axios';
import { NEW_BOOKING } from '../constants/routes';
import { SERVER_LOST } from '../constants/messajes';

const POSTING_BOOKING = 'POSTING_BOOKING';
const CREATE_BOOKING_SUCCESS = 'CREATE_BOOKING_SUCCESS';
const CREATE_BOOKING_ERROR = 'CREATE_BOOKING_ERROR';

const initialState = {
  loading: false,
  newBooking: false,
  error: false,
};

export const createBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_BOOKING:
      return { ...state, loading: true };

    case CREATE_BOOKING_SUCCESS:
      return { ...state, loading: false, newBOOKING: true };

    case CREATE_BOOKING_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const createBookingAction = booking => (dispatch, state) => {
  dispatch({ type: POSTING_BOOKING });
  axios
    .post(NEW_BOOKING, booking)
    .then(response => {
      dispatch({
        type: CREATE_BOOKING_SUCCESS,
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
        type: CREATE_BOOKING_ERROR,
        payload: errMsg,
      });
    });
};

export default createBookingAction;
