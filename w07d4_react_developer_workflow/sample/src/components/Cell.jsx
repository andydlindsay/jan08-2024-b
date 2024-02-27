const Cell = (props) => {

	return (
		<div className="cell" onClick={() => {props.handleCellClick(props.cell_id);}}>
			{props.played}
		</div>
	);
};

export default Cell;