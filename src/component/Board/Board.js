import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';

export default function Board() {
  const { board } = useContext(GameContext);

  return (
    <div id='board-container'>
      {board.map((box, index) => (
        <Box key={index} space={index}></Box>
      ))}
    </div>
  );
    
}