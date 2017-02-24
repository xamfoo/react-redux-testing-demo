import {
  CLEAR_NESTED_LIST,
  UPDATE_NESTED_LIST,
} from '../constants/action-types';

export const clearNestedListData = () => ({ type: CLEAR_NESTED_LIST });

// Simulate async action with a Promise
export const updateNestedListData = data => dispatch =>
  Promise.resolve().then(() => {
    dispatch({
      type: UPDATE_NESTED_LIST,
      payload: data,
    });
  });
