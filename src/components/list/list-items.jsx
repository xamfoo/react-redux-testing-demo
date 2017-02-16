import React, { PropTypes } from 'react';

const ListItems = ({ items }) => (
  <ul className="list-items">
    {
      items.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>{ item }</li>
      ))
    }
  </ul>
);

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListItems;
