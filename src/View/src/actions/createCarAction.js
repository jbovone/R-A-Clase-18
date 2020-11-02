import { CREATE_CAR } from '../constants/routes';
const POSTING_CAR = 'POSTING_CAR';
const CREATE_CAR_SUCCES = 'CREATE_CAR_SUCCES';
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

    case CREATE_CAR_SUCCES:
      return { ...state, loading: false, newCar: true };

    case CREATE_CAR_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const createCarAction = formData => (state, dispatch) => {
  dispatch({
    type: POSTING_CAR,
  });
  fetch(CREATE_CAR, {
    headers: { 'content-type': 'application/json' },
    method: 'post',
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (response.ok) {
        dispatch({
          type: CREATE_CAR_SUCCES,
          payload: response.json(),
        });
      }
    })
    .catch(error => {
      dispatch({
        type: CREATE_CAR_ERROR,
        payload: error,
      });
    });
  return state;
};

export default createCarAction;
