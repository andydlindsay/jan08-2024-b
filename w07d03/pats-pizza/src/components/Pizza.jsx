import {useState, useReducer} from 'react';

const initialState = {
  toppings: [],
  crustType: 'stuffed',
};

const reducer = (state, action) => {
  if (action.type === 'add-topping') {
    const copy = {
      ...state,
      toppings: [
        action.payload,
        ...state.toppings
      ]
    };

    return copy;
  }

  if (action.type === 'set-crust') {
    const copy = {
      ...state,
      crustType: action.payload,
    };

    return copy;
  }
};

const Pizza = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [topping, setTopping] = useState('');

  const addToppingHandler = () => {
    dispatch({ 
      type: 'add-topping', 
      payload: topping,
    }); // calls the reducer
  };

  const setCrust = (event) => {
    dispatch({
      type: 'set-crust',
      payload: event.target.value,
    });
  };

  const mappedToppings = state.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own pizza!!</h2>

      <div>
        <label>Crust type:</label>
        <input 
          value={state.crustType}
          onChange={setCrust}
        />
        <h3>Crust type: {state.crustType}</h3>
      </div>

      <div>
        <label>Topping</label>
        <input 
          value={topping}
          onChange={(event) => { setTopping(event.target.value) }}
        />
        <button onClick={addToppingHandler}>Add!</button>
      </div>

      { mappedToppings }
    </div>
  );
};

export default Pizza;
