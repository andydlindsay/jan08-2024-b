import {useState} from 'react';

const useToggle = (initialValue) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return [isOn, toggle];
};

export default useToggle;
