import React, { useCallback, useEffect, useState } from 'react';

export const Clock = ({ test }) => {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('posts').then((stream) => stream.json()).then(setPosts);
    fetch('users').then((stream) => stream.json()).then(setUsers);
  }, []);

  const onChildCLick = useCallback(() => {
    console.log('');
  }, [test]);

  return (
    <div>
      <ChildComponent doSmth={onChildCLick} />
    </div>
  );
};

export class Clock1 extends React.Component {
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

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');

    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
