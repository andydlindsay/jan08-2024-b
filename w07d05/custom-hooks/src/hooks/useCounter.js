import {useState} from 'react';
import useToggle from './useToggle';

const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const addN = (n) => {
    setCounter(counter + n);
  };

  // return [counter, increment, decrement, reset, addN];

  return {
    counter,
    increment,
    decrement,
    reset,
    addN
  };
};

export default useCounter;
