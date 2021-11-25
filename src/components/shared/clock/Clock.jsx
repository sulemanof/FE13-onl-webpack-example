import React from 'react';

// export const Clock = () => (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
// );

export class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.interval = setInterval(() => {
      console.log('set new state');

      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
