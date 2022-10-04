import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Box.css';

export default function Box({ space }) {
  const { place, board } = useContext(GameContext);
  function handleClick() {
    place(space);
  }
  return (
    <div className="box-container">
      <button onClick={handleClick}>{board[space]}</button>
    </div>
  );
}
