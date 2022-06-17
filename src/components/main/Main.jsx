import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import { Questions } from "../../helpers/Questions";

import './Main.css';

const Main = () => {

    //Shuffle questions array
    const shuffled = Questions.sort(() => 0.5 - Math.random());
    //Take 10 random questions array
    let questionsArray = shuffled.slice(0, 10);

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
            <select onChange={handleChangeFormat}>
                <option selected value="12">12h</option>
                <option value="24">24h</option>
            </select>
            <select onChange={handleChangeShowNumbers}>
                <option selected value="true">Affichage des chiffres</option>
                <option value="false">Masquer les chiffres</option>
            </select>
            <button onClick={() => { setGameState("quiz"); }} className="startBtn button-transition">Démarrer</button>
        </div>
    </div>
}

export default Main;