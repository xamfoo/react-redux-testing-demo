import React, { PropTypes } from 'react';

class ListInput extends React.Component {
  constructor() {
    super();

    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    const {
      state: { value },
    } = this;

    return (
      <form className="list-input" onSubmit={this.onSubmit}>
        <input type="text" value={value} onChange={this.onChange} />
        <button onClick={this.onSubmit}>Add Item</button>
      </form>
    );
  }
}

ListInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ListInput;
