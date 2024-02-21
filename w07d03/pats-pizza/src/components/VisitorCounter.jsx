import {useState} from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>Number of Vistors: { counter }</h2>
      <button onClick={clickHandler}>Click me!!</button>
    </div>
  );
};

export default VisitorCounter;
