import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';
import './Board.css';

export default function Board() {
  const { board, mess, reset } = useContext(GameContext);

  return (
    <>
      <h1>{mess}</h1>
      <button onClick={reset}>Reset</button>
      <div id="board-container">
        {board.map((box, index) => (
          <Box key={index} space={index}></Box>
        ))}
      </div>
    </>
  );
}
