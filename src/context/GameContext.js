import { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [board, setBoard] = useState([
        {space: 1, cont: ''},
        {space: 2, cont: ''},
        {space: 3, cont: ''},
        {space: 4, cont: ''},
        {space: 5, cont: ''},
        {space: 6, cont: ''},
        {space: 7, cont: ''},
        {space: 8, cont: ''},
        {space: 9, cont: ''}
    ]);
    const [turn, setTurn] = useState('X');
    const [active, setActive] = useState('active');
    const [mess, setMess] = useState('Turn X');

    return <GameContext.Provider value={{
        turn, setTurn, active, setActive, mess, setMess
      }}>
        {children}
      </GameContext.Provider>;
    };
    
    export { GameProvider, GameContext };