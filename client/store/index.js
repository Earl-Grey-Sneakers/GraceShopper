import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import styles from './styles';
import singleStyleReducer from './singleStyle';
import cart from './cart';
import userAccount from './userAccount';
import adminReducer from './admin';

const reducer = combineReducers({
  auth,
  styles,
  singleStyleReducer,
  adminReducer,
  cart,
  userAccount,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
