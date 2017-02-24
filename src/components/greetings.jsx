import React, { PropTypes } from 'react';

const Greetings = ({ name }) => (
  <div className="greetings">{ `Hello ${name}!` }</div>
);

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greetings;
