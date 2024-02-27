import './App.css';
import CounterList from './components/CounterList';
import { useState } from 'react';

function App() {

	const [total, setTotal] = useState(0);
	const [managedInput, setManagedInput] = useState('');
	const [submittedText, setSubmittedText] = useState('');

	const onChangeHandler = (event) => {
		console.log('the times they are a changin');
		setManagedInput(event.target.value);
	};

	const onSubmit = () => {
		setSubmittedText(managedInput);
		setManagedInput('');
	};

	const incrementTotal = () => {
		setTotal((prev) => {return prev + 1});
	};

	let classString = 'App';
	if (total > 10) {
		classString += ' hot';
	}

  return (
    <div className={classString}>
			<h1>Monkey Fuzz</h1>

			<input onChange={onChangeHandler} value={managedInput} />
			<button onClick={onSubmit}>Submit</button>

			<CounterList incrementTotal={incrementTotal} total={total}/>
    </div>
  );
}

export default App;
