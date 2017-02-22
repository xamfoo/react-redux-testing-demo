// We export mockable logging functions to prevent stubbing the console object
// in tests. Stubbing the console object causes issues in test reporting.

export const log = console.log.bind(console);

export const error = console.error.bind(console);
