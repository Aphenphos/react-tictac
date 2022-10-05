import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [active, setActive] = useState('true');
  const [mess, setMess] = useState('Xs turn');

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
    disableButtons();
  }

  function disableButtons() {
    setBoard(Array(9).fill(mess));
  }
  async function place(i) {
    if (board[i] === '') {
      board[i] = turn;
      await checkGame();
    } else {
      window.alert('space occupied');
    }
  }

  function switchTurn() {
    if (turn === 'X') {
      setTurn('O');
      setMess('Os turn');
    } else {
      setTurn('X');
      setMess('Xs turn');
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
    } else {
      switchTurn();
    }
  }

  function reset() {
    setBoard(Array(9).fill(''));
    setTurn('X');
    setMess('Xs Turn');
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
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
