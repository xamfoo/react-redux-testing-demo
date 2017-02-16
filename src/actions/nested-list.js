/* eslint-disable import/prefer-default-export */
import { UPDATE_NESTED_LIST } from '../constants/action-types';

// Simulate async action
export const updateNestedListData = data => dispatch =>
  Promise.resolve().then(() => {
    dispatch({
      type: UPDATE_NESTED_LIST,
      payload: data,
    });
  });
