// CounterToy.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterToy = () => {
  const counters = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log("CounterToy - Redux State:", counters);

  return (
    <div>
      <div>Number of toys pressed: {counters}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Press toys
      </button>
    </div>
  );
};

export default CounterToy;
