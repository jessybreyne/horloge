import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import Clock from '../clock/Clock';

import "./Quiz.css";

const Quiz = () => {

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);
    const { format, setFormat } = useContext(QuizContext);
    const { showNumbers, setShowNumbers } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);

    const [answer, setAnswer] = useState("");

    function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    function clock() {
        let hours = getRandomInt(24)
        let minutes = getRandomInt(60)
        console.log(hours, minutes)
        let hour;
        let minute = minutes * 6;
        if(parseInt(format)===24){
            hour = hours * 15 + 180;
        } else {
            hour = hours * 30;
        }
        // let date = new Date();
        // let hours = ((date.getHours() + 11) % 12 + 1) + (date.getMinutes() / 60);
        // let minutes = date.getMinutes();

        document.getElementById('heure').style.transform = `rotate(${hour}deg)`;
        document.getElementById('minute').style.transform = `rotate(${minute}deg)`;
    }

    useEffect(() => {
        //timer for quiz - when timer reach 0 end screen appear
        clock();
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (timer === false || counter === 0) {
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
        setCounter(60);
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
                <p className="terminal-prompt mt-25 last-login">Score : {score}</p>
                {/* Timer */}
                <p className="terminal-prompt last-login">Temps : <span style={{ color: counter < 11 && '#FF5B52' }}>{counter}</span></p>
                <Clock />
                {/* Give up button */}
                <button id="giveUpBtn" onClick={() => { cancel(); }} className="giveUpBtn giveUp-transition">Quitter le test</button>
            </div>
        </div>
    </div>
}

export default Quiz;