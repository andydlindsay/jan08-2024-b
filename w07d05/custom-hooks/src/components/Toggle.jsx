import {useState} from 'react';

import useToggle from '../hooks/useToggle';

const Toggle = () => {
  const [isOn, clickHandler] = useToggle(true);

  // const [isOn, setIsOn] = useState(false);

  // const clickHandler = () => {
  //   setIsOn(!isOn);
  // };

  return (
    <div>
      <h2>Toggle Component</h2>

      <button onClick={clickHandler}>Click me!</button>

      { isOn && <h2>🌞</h2> }
      { !isOn && <h2>🌚</h2> }
    </div>
  );
};

export default Toggle;
