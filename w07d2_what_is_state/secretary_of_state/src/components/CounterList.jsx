import { useState } from 'react';
import Counter from './Counter';

const CounterList = (props) => {

	console.log('Counter List is rendering.');
	const total = props.total;
	const incrementTotal = props.incrementTotal;

	return (
		<>
			<h3>Counter List</h3>
			<Counter defaultValue={0} name={'one'} incrementTotal={incrementTotal} total={total}/>
			<Counter defaultValue={0} name={'two'} incrementTotal={incrementTotal} total={total}/>
			<Counter defaultValue={0} name={'three'} incrementTotal={incrementTotal} total={total}/>
			<Counter defaultValue={0} name={'four'} incrementTotal={incrementTotal} total={total}/>
			<div><em>TOTAL:</em>{total}</div>
		</>
	);
};

export default CounterList;
