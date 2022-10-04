import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [active, setActive] = useState('true');
  const [mess, setMess] = useState('Turn X');

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (active === 'false') {
    setActive('true');
    setBoard(Array(9).fill(''));
    window.alert(mess + ' Would you like to start a new game?');
  }

  async function place(i) {
    if (board[i] === '') {
      board[i] = turn;
      await checkGame();
      switchTurn();
    } else {
      window.alert('space occupied');
    }
  }

  function switchTurn() {
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
  }

  let total = 0;
  async function checkGame() {
    //checks if cats game
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== '') {
        total++;
      }
    }
    if (total === board.length) {
      setMess('Cats Game');
      setActive('false');
    }

    //checks if someone won
    const curTurn = turn;
    function checkWin(curTurn) {
      return winConditions.some((combo) => {
        return combo.every((i) => {
          return board[i] === curTurn;
        });
      });
    }

    if (checkWin(curTurn)) {
      setMess(curTurn + ' WINS');
      setActive('false');
    }
  }

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        turn,
        setTurn,
        active,
        setActive,
        mess,
        setMess,
        place,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
