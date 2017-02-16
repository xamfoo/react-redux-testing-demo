import React from 'react';
import { Provider } from 'react-redux';

const withStore = store => (BaseComponent) => {
  const WithStore = (...props) => (
    <Provider store={store}>
      <BaseComponent {...props} />
    </Provider>
  );

  // Following convention of connect() in redux
  WithStore.WrappedComponent = BaseComponent;

  return WithStore;
};

export default withStore;
