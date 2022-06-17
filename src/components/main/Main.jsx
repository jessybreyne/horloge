import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { FaHome } from "react-icons/fa"
import { Questions } from "../../helpers/Questions";

import './Main.css';

const Main = () => {

    //Shuffle questions array
    const shuffled = Questions.sort(() => 0.5 - Math.random());
    //Take 10 random questions array
    let questionsArray = shuffled.slice(0, 10);

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);

    const d = new Date();
    var minutes;

    // useEffect(() => {
    //     setQuestions(questionsArray);
    // })

    return <div className="Main">
       <header className="App-header">
         <a
           className="App-link"
           href="/"
           rel="noopener noreferrer"
         >
           Horloge 12-24
         </a>
       </header>
        <div className="terminal-wrapper fadeIn">
            <button onClick={() => { setGameState("quiz"); }} className="fadeIn delay-0_3 startBtn button-transition">Start</button>
        </div>
    </div>
}

export default Main;