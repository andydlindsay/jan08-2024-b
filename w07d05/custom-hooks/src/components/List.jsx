import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const List = () => {
  const {list, addElement, removeElement, emptyArray} = useList();
  const elementInput = useInput('');

  const mappedList = list.map((element, index) => {
    return <li key={index}>{element}  <span onClick={() => removeElement(element)}>x</span></li>;
  });

  return (
    <div>
      <h2>List Component</h2>

      <button onClick={emptyArray}>empty</button>

      <div>
        <label>New element:</label>
        <input 
          value={elementInput.value}
          onChange={elementInput.onChange}
        />
        <button onClick={() => addElement(elementInput.value)}>Add</button>
      </div>

      { mappedList.length === 0 && <p>please add something above</p> }
      { mappedList.length > 0 && mappedList }
    </div>
  );
};

export default List;
