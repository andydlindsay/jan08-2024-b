// 1. store a list as an array in state
// 2. be able to add an element to the array
// 3. be able to remove an element from the array
// 4. be able to empty the array

import {useState} from 'react';

const useList = () => {
  const [list, setList] = useState([]);

  const addElement = (element) => {
    const copy = [...list, element];
    setList(copy);
  };

  const removeElement = (element) => {
    const copy = list.filter((el) => { return el !== element; });
    setList(copy);
  };

  const emptyArray = () => {
    setList([]);
  };

  return {
    list,
    addElement,
    removeElement,
    emptyArray,
  };
};

export default useList;
