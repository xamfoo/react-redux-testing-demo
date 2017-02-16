const logger = store => next => (action) => {
  /* eslint-disable no-console */
  console.log('dispatching', action);

  const result = next(action);

  console.log('next state', store.getState());

  return result;
  /* eslint-enable no-console */
};

export default logger;
