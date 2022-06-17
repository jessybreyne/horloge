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

    function clock() {
        let date = new Date();
        let hours = ((date.getHours() + 11) % 12 + 1) + (date.getMinutes() / 60);
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let hour = hours * 30;
        let minute = minutes * 6;
        let second = seconds * 6;

        document.getElementById('heure').style.transform = `rotate(${hour}deg)`;
        document.getElementById('minute').style.transform = `rotate(${minute}deg)`;
        document.getElementById('seconde').style.transform = `rotate(${second}deg)`;
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
                <div class="clock">
                    <div class="wrap">
                        <span id="heure"></span>
                        <span id="minute"></span>
                        <span id="seconde"></span>
                        <span class="dot"></span>
                        <div class="sep" id="h0">0</div>
                        <div class="sep" id="h1">1</div>
                        <div class="sep" id="h2">2</div>
                        <div class="sep" id="h3">3</div>
                        <div class="sep" id="h4">4</div>
                        <div class="sep" id="h5">5</div>
                        <div class="sep" id="h6">6</div>
                        <div class="sep" id="h7">7</div>
                        <div class="sep" id="h8">8</div>
                        <div class="sep" id="h9">9</div>
                        <div class="sep" id="h10">10</div>
                        <div class="sep" id="h11">11</div>
                    </div>
                </div>
                {/* Give up button */}
                <button id="giveUpBtn" onClick={() => { cancel(); }} className="giveUpBtn giveUp-transition">Quitter le test</button>
            </div>
        </div>
    </div>
}

export default Quiz;