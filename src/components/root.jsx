import React from 'react';
import store from '../lib/store';
import withStore from '../lib/with-store';
import Greetings from './greetings';
import List from './list';
import NestedList from './nested-list';

const Root = () => (
  <div className="root">
    <Greetings name="Sabre" />
    <div className="root-content">
      <List />
      <NestedList />
    </div>
  </div>
);

export default withStore(store)(Root);
