import React, { PropTypes } from 'react';

const NestedListItem = ({ data }) => {
  if (data === true || data === false || data === null) {
    return <span>{ JSON.stringify(data) }</span>;
  }

  if (typeof data === 'string' || typeof data === 'number') {
    return <span>{ data }</span>;
  }

  if (Array.isArray(data)) {
    return (
      <ul className="nested-list-item nested-list-item--array">
        {
          data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <NestedListItem data={item} />
            </li>
          ))
        }
      </ul>
    );
  }

  return (
    <div className="nested-list-item nested-list-item--object">
      {
        Object.keys(data).map(key => (
          <div key={key} className="nested-list-item__pair">
            <div className="nested-list-item__pair-key">
              { `${key}: ` }
            </div>
            <NestedListItem data={data[key]} />
          </div>
        ))
      }
    </div>
  );
};

NestedListItem.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
};

NestedListItem.defaultProps = {
  data: [],
};

export default NestedListItem;
