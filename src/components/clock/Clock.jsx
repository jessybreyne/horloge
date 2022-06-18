import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';

import './Clock.css';

const Clock = () => {

    const { questions, setQuestions } = useContext(QuizContext);
    const { gameState, setGameState } = useContext(QuizContext);
    const { format, setFormat } = useContext(QuizContext);
    const { showNumbers, setShowNumbers } = useContext(QuizContext);

    const handleChangeFormat = (event) => {
        console.log(event.target.value);
        setFormat(event.target.value);
    }

    const handleChangeShowNumbers = (event) => {
        console.log(event.target.value);
        setShowNumbers(event.target.value);
    }

    // useEffect(() => {
    //     setQuestions(questionsArray);
    // })
    console.log(format)

    if (parseInt(format) === 24) {
        return (
            <div class="clock">
                <div class="wrap">
                    <span id="heure"></span>
                    <span id="minute"></span>
                    <span class="dot"></span>
                    <div class="sep" id="best-h12">12</div>
                    <div class="sep" id="best-h14">14</div>
                    <div class="sep" id="best-h16">16</div>
                    <div class="sep" id="best-h18">18</div>
                    <div class="sep" id="best-h20">20</div>
                    <div class="sep" id="best-h22">22</div>
                    <div class="sep" id="best-h24">24</div>
                    <div class="sep" id="best-h2">2</div>
                    <div class="sep" id="best-h4">4</div>
                    <div class="sep" id="best-h6">6</div>
                    <div class="sep" id="best-h8">8</div>
                    <div class="sep" id="best-h10">10</div>
                </div>
            </div>
        )
    } else {
        return (
            <div class="clock">
                <div class="wrap">
                    <span id="heure"></span>
                    <span id="minute"></span>
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
        )
    }

}

export default Clock;