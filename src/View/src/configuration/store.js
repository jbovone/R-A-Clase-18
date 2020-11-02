import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { loginReducer } from '../actions/loginAction';
import { createUserReducer } from '../actions/createUserAction';
import { createCarReducer } from '../actions/createCarAction';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  login: loginReducer,
  createUser: createUserReducer,
  createCar: createCarReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}

export default generateStore;
