import { applyMiddleware, createStore } from 'redux';
import middlewares from './middlewares';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
