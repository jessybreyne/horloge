import React, { useContext } from 'react';
import { QuizContext } from '../../helpers/Contexts';

import './End.css';

const End = () => {
    const { gameState, setGameState } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);

    //Try again - show main screen, set score back to 0, set counter back to 240 seconds
    const backOnMain = () => {
        setScore(0);
        setCounter(60);
        setGameState("main");
    }

    return <div className="End fadeIn delay-0_3">
       <header className="App-header">
         <a
           className="App-link"
           href="/"
           rel="noopener noreferrer"
         >
           Horloge 12-24
         </a>
       </header>
        <div className="terminal-wrapper">
            <div className="terminal-bot">
                <p className="terminal-prompt terminal-msg"> your score: {score}</p>
                <button onClick={() => { backOnMain(); }} className="startBtn button-transition">Retour à l'accueil</button>
            </div>
        </div>
    </div>
}

export default End;