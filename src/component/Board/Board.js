import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';
import './Board.css';

export default function Board() {
  const { board, turn } = useContext(GameContext);

  return (
    <>
      <h1>its {turn}s turn</h1>
      <div id="board-container">
        {board.map((box, index) => (
          <Box key={index} space={index}></Box>
        ))}
      </div>
    </>
  );
}
