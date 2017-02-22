import { log } from '../log';

const logger = store => next => (action) => {
  log('dispatching', action);

  const result = next(action);

  log('next state', store.getState());

  return result;
  /* eslint-enable no-console */
};

export default logger;
