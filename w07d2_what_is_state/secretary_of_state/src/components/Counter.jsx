import { useState } from 'react';

const Counter = (props) => {

	console.log(`Counter ${props.name} is rendering.`);

	// const arrayOfThings = useState(42);
	// let value = arrayOfThings[0];
	// const setValue = arrayOfThings[1];
	const [value, setValue] = useState(props.defaultValue); // 42 is used ONLY as a default value. it is ignored on subsequent calls to useState

	const clickHandler = (event) => { 
		console.log('button was clicked');
		// value = value + 1; this BREAKS the fundamental rule of React

		// setValue(value + 1); // the direct way
		setValue((prev) => {return prev + 1}); // the callback queue way preferred
		props.incrementTotal();
	};

	return (
		<>
			<h3>Other Monkey Fuzz</h3>
			{ value } / { props.total }
			<button onClick = { clickHandler }>Increment</button>
		</>
	);
};

export default Counter;
