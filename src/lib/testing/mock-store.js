import { applyMiddleware, createStore } from 'redux';
import middlewares from '../middlewares';
import rootReducer from '../../reducers';

const mockStore = (initialState, otherMiddlewares) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(...(otherMiddlewares || middlewares))
);

export default mockStore;
