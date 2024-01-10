// CounterToy.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterToy = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("CounterToy - Redux State:", counter);

  return (
    <div>
      <div>Number of toys pressed: {counter}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Press toys
      </button>
    </div>
  );
};

export default CounterToy;
