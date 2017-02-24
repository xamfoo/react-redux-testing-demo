import React, { PropTypes } from 'react';
import { t } from '../lib/polyglot';

const Greetings = ({ name }) => (
  <div className="greetings">{ t('hello', { name }) }</div>
);

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greetings;
