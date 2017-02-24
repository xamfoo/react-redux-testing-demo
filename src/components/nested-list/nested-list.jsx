import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { t } from '../../lib/polyglot';
import { mapStateToProps, mapDispatchToProps } from './nested-list-connector';
import NestedListInput from './nested-list-input';
import NestedListItem from './nested-list-item';

class NestedList extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    this.clearData = this.clearData.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  clearData() {
    this.props.clearData();
    this.setState({ inputValue: '' });
  }

  updateInputValue(inputValue) {
    this.setState({ inputValue });
  }

  render() {
    const {
      props: { data },
      state: { inputValue },
      clearData,
      updateInputValue,
    } = this;

    return (
      <div className="nested-list">
        <h1>Nested List</h1>
        <NestedListInput value={inputValue} onChange={updateInputValue} />
        <button onClick={clearData}>{ t('NestedList.clear') }</button>
        <NestedListItem data={data} />
      </div>
    );
  }
}

NestedList.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]),
  clearData: PropTypes.func.isRequired,
};

NestedList.defaultProps = {
  data: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(NestedList);
