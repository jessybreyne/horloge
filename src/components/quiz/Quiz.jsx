import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';

import "./Quiz.css";

const Quiz = () => {

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);
    const { format, setFormat } = useContext(QuizContext);
    const { showNumbers, setShowNumbers } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);

    const [answer, setAnswer] = useState("");

    let btns = document.getElementsByClassName("optionBtn");
    const d = new Date();
    var minutes;
    var lastQuestion;

    useEffect(() => {
        //timer for quiz - when timer reach 0 end screen appear
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (timer === false || counter === 0) {
            console.log("FFFIIINNN")
            setGameState("end");
        }
        return () => clearInterval(timer);
    }, [counter])

    //functionality for the next question
    const nextQuestion = () => {
        <p>test</p>
    }

    //restart quiz - go back to main screen, set score to 0 and counter to 240 seconds
    const cancel = () => {
        setScore(0);
        setCounter(240);
        setGameState("main");
    }

    return <div className="Quiz fadeIn delay-0_3">
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
            <div id="terminal-wrapper" className="terminal-bot">
                {/* User score */}
                <p className="terminal-prompt mt-25 last-login">Score : {score}/10</p>
                {/* Timer */}
                <p className="terminal-prompt last-login">Temps : <span style={{color: counter < 11 && '#FF5B52'}}>{counter}</span></p>
                {/* Give up button */}
                    <button id="giveUpBtn" onClick={() => { cancel(); }} className="giveUpBtn giveUp-transition">Quitter le test</button>
            </div>
        </div>
    </div>
}

export default Quiz;