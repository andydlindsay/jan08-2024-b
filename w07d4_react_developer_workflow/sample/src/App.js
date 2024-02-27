import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';
import { useState } from 'react';

const date = '2024';
const EMPTY = '';
const X_PLAYER = 'X';
const O_PLAYER = 'O';

function App() {

	const [player, setPlayer] = useState('O');

	const togglePlayer = () => {
		setPlayer((prev) => {
			if (prev === X_PLAYER) {
				return O_PLAYER;
			}
			return X_PLAYER;
		});
	};

  return (
    <div className="App">
			<Header player={player} />
			<Board togglePlayer={togglePlayer} player={player}/>
			<Footer date={date} />
    </div>
  );
}

export default App;
