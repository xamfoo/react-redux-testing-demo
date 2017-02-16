import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './nested-list-connector';
import NestedListInput from './nested-list-input';
import NestedListItem from './nested-list-item';

const NestedList = ({ data }) => (
  <div className="nested-list">
    <h1>Nested List</h1>
    <NestedListInput />
    <NestedListItem data={data} />
  </div>
);

NestedList.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
};

NestedList.defaultProps = {
  data: [],
};

export default connect(mapStateToProps)(NestedList);
