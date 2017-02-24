import {
  CLEAR_NESTED_LIST,
  UPDATE_NESTED_LIST,
} from '../constants/action-types';

export const clearData = () => ({ type: CLEAR_NESTED_LIST });

export const updateData = data => ({
  type: UPDATE_NESTED_LIST,
  payload: data,
});

// Simulate async action with a Promise
export const updateDataAsync = data => dispatch =>
  Promise.resolve().then(() => {
    dispatch(updateData(data));
  });
