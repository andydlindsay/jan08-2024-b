// import {useState} from 'react';
import useInput from "../hooks/useInput";

const Form = () => {
  const productInput = useInput('');
  const priceInput = useInput(0);
  const descriptionInput = useInput('');

  const onSave = () => {
    alert(`product ${productInput.value} costs $${priceInput.value} and has description: ${descriptionInput.value}`);
  };

  return (
    <div>
      <h2>Add a new Product</h2>

      <div>
        <label>New product</label>
        <input 
          value={productInput.value}
          onChange={productInput.onChange}
        />
      </div>
      <div>
        <label>Price</label>
        <input 
          // value={priceInput.value}
          // onChange={priceInput.onChange}
          // onBlur={priceInput.onBlur}
          { ...priceInput }
        />
      </div>
      <div>
        <label>Description</label>
        <input 
          value={descriptionInput.value}
          onChange={descriptionInput.onChange}
        />
      </div>

      <button onClick={onSave}>Save!</button>
    </div>
  );
};

export default Form;
