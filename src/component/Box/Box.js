import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Box({ space }) {
  const { place } = useContext(GameContext);
  function handleClick() {
    place(space);
  }
  return (
    <div className='box-container'>
      <button onClick={handleClick}>{space}</button>
    </div>
  );
}