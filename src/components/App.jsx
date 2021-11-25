import React from 'react';
import { Clock } from './shared/clock/Clock';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showClock: false,
      showWarning: true,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({ showClock: !prevState.showClock }));
  };

  handleDivClick = () => {
    console.log('div was clicked');
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showWarning: false });
    }, 5000);
  }

  render() {
    if (this.state.showWarning) {
      return <span>Nothing to show :(</span>;
    }

    return (
      <div onClick={this.handleDivClick}>
        <button onClick={this.handleClick}>Show clock</button>
        {this.state.showClock && <Clock />}
      </div>
    );
  }
}
