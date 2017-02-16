import React from 'react';
import ListInput from './list-input';
import ListItems from './list-items';

class List extends React.Component {
  constructor() {
    super();

    this.state = { items: [] };

    this.onClear = this.onClear.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  onInput(name) {
    this.setState({
      items: [...this.state.items, name],
    });
  }

  onClear() {
    this.setState({ items: [] });
  }

  render() {
    return (
      <div className="list">
        <h1>List</h1>
        <ListInput onSubmit={this.onInput} />
        <button onClick={this.onClear}>Clear List</button>
        <ListItems items={this.state.items} />
      </div>
    );
  }
}

export default List;
