import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'underscore';
import { mapDispatchToProps } from './nested-list-input-connector';

class NestedListInput extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.updateData = debounce(this.updateData.bind(this), 200);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({ value });
    this.updateData(value);
  }

  updateData(value) {
    try {
      this.props.updateData(JSON.parse(value));
    } catch (e) {
      this.props.updateData([]);
    }
  }

  render() {
    return (
      <div className="nested-list-input">
        <div>Please enter valid JSON</div>
        <textarea value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

NestedListInput.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NestedListInput);
