const LOADING = "LOADING";
const CREATE_CAR_SUCCES = "CREATE_CAR_SUCCES";
const CREATE_CAR_ERROR = "LOGIN_ERROR";

const initialState = {
  loading: false,
  login: false,
  error: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case CREATE_CAR_SUCCES:
      return { ...state, loading: false, login: true, car: action.payload };

    case CREATE_CAR_ERROR:
      return { ...state, loading: false, error: action.payload };
  }
};

export function useLogin(state, dispatch) {
  dispatch({
    type: LOADING,
  });
  fetch("/car/:create", {
    method: "post",
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: CREATE_CAR_SUCCES,
          payload: response.json(),
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: CREATE_CAR_ERROR,
        payload: error,
      });
    });
  return ({ loading, error, user } = state);
}
