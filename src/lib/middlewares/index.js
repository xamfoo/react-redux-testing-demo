import reduxThunk from 'redux-thunk';
import logger from './logger';

const middlewares = [
  reduxThunk,
  ...(process.env.NODE_ENV === 'development' ? [logger] : []),
];

export default middlewares;
