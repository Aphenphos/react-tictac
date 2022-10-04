import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '', 
  ]);
  const [turn, setTurn] = useState('X');
  const [active, setActive] = useState('active');
  const [mess, setMess] = useState('Turn X');

  function place(i) {
    console.log('x or o' + i);
  }

  return <GameContext.Provider value={{
    board, setBoard, turn, setTurn, active, setActive, mess, setMess, place
  }}>
    {children}
  </GameContext.Provider>;
};
    
export { GameProvider, GameContext };