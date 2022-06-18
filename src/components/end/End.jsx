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

  return (
    <div id="bg-app">
      <section className='fadeIn'>
        <header>
          <a href="/" rel="noopener noreferrer">
            <h1>Test de vitesse de lecture de l'heure en 12h ou 24h</h1>
          </a>
        </header>
        <p className="text-score">Ton score est de : {score}</p>
        <button onClick={() => { backOnMain(); }} className="btn btn-start">Retour à l'accueil</button>
      </section>
    </div>
  )
}

export default End;