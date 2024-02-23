// import {useState} from 'react';
import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [counter, , , reset, addN] = useCounter(42);
  const {counter, increment, decrement, reset, addN} = useCounter(42);

  return (
    <div>
      <h2>Counter Component</h2>
      <h2>Count is {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => addN(5)}>plus 5</button>
      <button onClick={() => addN(10)}>plus 10</button>
    </div>
  );
};

export default Counter;
