const LOADING = 'LOADING';
const LOGIN_SUCCES = 'LOGIN_SUCCES';
const LOGIN_ERROR = 'LOGIN_ERROR';

const initialState = {
  loading: false,
  login: false,
  error: false,
  user: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case LOGIN_SUCCES:
      return { ...state, loading: false, login: true, user: action.payload };

    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export const loginAction = formData => (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  fetch('http://localhost:4000/clients/login', {
    headers: { 'content-type': 'application/json' },
    method: 'post',
    body: JSON.stringify(formData),
  })
    .then(response => {
      console.log('RESPONSE', response);
      if (response.ok) {
        dispatch({
          type: LOGIN_SUCCES,
          payload: response.json(),
        });
      }
    })
    .catch(error => {
      dispatch({
        type: LOGIN_ERROR,
        payload: error,
      });
    });
};
