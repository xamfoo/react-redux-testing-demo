import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'underscore';
import { mapDispatchToProps } from './nested-list-input-connector';

class NestedListInput extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.updateData = debounce(this.updateData.bind(this), 200);
  }

  onChange(event) {
    const { value } = event.target;

    this.props.onChange(value);
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
        <textarea
          className="nested-list-input__field"
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

NestedListInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

// We introduce mapDispatchToProps here to create the scenario of nested
// redux-connected components. We could also have passed the updateData action
// from the parent.
export default connect(null, mapDispatchToProps)(NestedListInput);
