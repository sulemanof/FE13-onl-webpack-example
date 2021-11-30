import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onSubmit = (ev) => {
    ev.preventDefault();

    this.props.addUser(this.state.value);
    this.setState({ value: '' });
  };

  onChange = (ev) => {
    this.setState({ value: ev.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
