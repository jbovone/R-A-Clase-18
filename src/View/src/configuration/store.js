import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { loginReducer } from '../actions/authActions';
import { createUserReducer } from '../actions/createUserAction';
import { createCarReducer } from '../actions/createCarAction';
import { getCarsReducer } from '../actions/getCarsAction';
import { usersReducer } from '../actions/getUsersAction';
import { getUserById } from '../actions/getUserDatabyIdAction';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  login: loginReducer,
  createUser: createUserReducer,
  createCar: createCarReducer,
  users: usersReducer,
  automobiles: getCarsReducer,
  userOverview: getUserById,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}

export default generateStore;
