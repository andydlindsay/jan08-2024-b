import Cell from './Cell.jsx';
import { useState, useEffect } from 'react'; 

const Board = (props) => {

	const EMPTY = '';
	const X_PLAYER = 'X';
	const O_PLAYER = 'O';

	const [board, setBoard] = useState(
		[EMPTY,EMPTY,EMPTY,
		EMPTY,EMPTY,EMPTY,
		EMPTY,EMPTY,EMPTY]);
	
	const victories = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],	
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	const weHaveAWinner = (player) => {
		console.log('player', player);
		console.log('board', board);
		for (let victorySet of victories) {
			let victory = true;
			console.log('victorySet', victorySet);
			for (let vcell_id of victorySet) {
				console.log('vcell_id', vcell_id);
				if (board[vcell_id] !== player) {
					victory = false;
				}
			}
			if (victory) {
				return true; // we have a winner
			}
		}
		return false;
	};

	useEffect(() => {
		console.log('props.player', props.player);
		if (!weHaveAWinner(props.player)){
			props.togglePlayer();
		} else {
			console.log('WINNER IS ', props.player);
		}
	}, [board]);

	const handleCellClick = (cell_id) => {
		if (board[cell_id] === EMPTY) { // full expression in case EMPTY is truthy
			setBoard((prev) => {
				const newBoard = [...prev];
				newBoard[cell_id] = props.player;
				return newBoard;
			});
		}
	};

	// the business logic of setting up the data 
	// required for the presentation of this component

	let boardOutput = [];
	for (let row = 0; row < 3; row++) {
		for (let local_cell = 0 ; local_cell < 3; local_cell++) {
			const cell_id = row * 3 + local_cell;
			boardOutput.push({cell_id: cell_id, row: row});
		}
	}

	return (
		<>
		<h4>The Board</h4>

		<div className="board">

			{ boardOutput.map((item, index) => <Cell key={index} played={board[item.cell_id]} row={item.row} cell_id={item.cell_id} handleCellClick={handleCellClick}/>) }

		</div>
		</>
	);
};

export default Board;