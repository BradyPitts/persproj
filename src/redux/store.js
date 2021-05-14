import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import productsReducer from './productsReducer';
import userReducer from './userReducer2';

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));