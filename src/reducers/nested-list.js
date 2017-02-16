import { UPDATE_NESTED_LIST } from '../constants/action-types';

const initialState = [];

const nestedListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NESTED_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default nestedListReducer;
