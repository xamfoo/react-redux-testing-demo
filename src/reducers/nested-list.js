import {
  UPDATE_NESTED_LIST,
  CLEAR_NESTED_LIST,
} from '../constants/action-types';

const initialState = [];

const nestedList = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_NESTED_LIST:
      return initialState;

    case UPDATE_NESTED_LIST:
      return action.payload;

    default:
      return state;
  }
};

export default nestedList;
