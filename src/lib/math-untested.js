/* eslint-disable */
export const add = (a, b) => {
  return a + b;
};

export const minus = (a, b) => {
  return a - b;
};

export const isNegative = (a) => {
  // Testing coverage for branches
  if (a < 0) {
    return true;
  }

  return false;
};

export const isEven = (a) => {
  // Testing coverage for ternary operator
  return a % 2 ? false : true;
};
