import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './clickerSlice';

export const Clicker = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const onIncrement = () => {
    dispatch(increment(1));
  };

  const onDecrement = () => {
    dispatch(decrement(1));
  };

  const onReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div>{counter}</div>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onReset}>0</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};
