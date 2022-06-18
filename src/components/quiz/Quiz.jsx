import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../../helpers/Contexts';
import Clock from '../clock/Clock';
import Cleave from "cleave.js/react";
import convertTime from 'convertible-js';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./Quiz.css";

const Quiz = () => {

    const { setGameState } = useContext(QuizContext);
    const { counter, setCounter } = useContext(QuizContext);
    const { format } = useContext(QuizContext);
    const { night, setNight } = useContext(QuizContext);
    const { score, setScore } = useContext(QuizContext);

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const [colorText, setColorText] = useState("");
    const [colorBg, setColorBg] = useState("");

    let styleNight = {
        fontSize: '2rem',
        fontWeight: 600,
        color: colorText,
    };

    let styleBg = {
        backgroundColor: colorBg,
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function clock() {
        let hours = getRandomInt(24)
        let minutes = getRandomInt(60)
        setQuestion(hours + ":" + minutes)
        if (hours > 12) {
            setNight('pm');
            setColorText("black");
            setColorBg("#dfb900");
        } else {
            setNight('am');
            setColorText("white");
            setColorBg("#002872");

        }
        let hour;
        hours += minutes / 60;
        let minute = minutes * 6;
        if (parseInt(format) === 24) {
            hour = hours * 15 + 180;
        } else {
            hour = hours * 30;
        }
        document.getElementById('heure').style.transform = `rotate(${hour}deg)`;
        document.getElementById('minute').style.transform = `rotate(${minute}deg)`;
    }

    const handleSubmitAnswer = (event) => {
        event.preventDefault();
        setAnswer(event.target.value);

        // console.log(convertTime(question, { convertTo: '24-hour' }), convertTime(answer, { convertTo: '24-hour' }))
        let question_text = convertTime(question, { convertTo: '24-hour' });
        let answer_text = convertTime(answer, { convertTo: '24-hour' });

        let question_hour = question_text.slice(0,2);
        let question_minutes = question_text.slice(3,5);
        let answer_hour = answer_text.slice(0,2);
        let answer_minutes = answer_text.slice(3,5);

        var date1 = new Date(2000, 0, 1,  question_hour, question_minutes); 
        var date2 = new Date(2000, 0, 1, answer_hour, answer_minutes);

        var diff = date2 - date1;
        let diff_minutes = Math.abs( ((diff/1000)/60) ) 

        if (diff_minutes < 4) {
            setAnswer("");
            setScore(score + 1);
            nextQuestion();
            toast.success('Félicitations!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setAnswer("");
            toast.error('Ce n\'est pas ' + answer, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
    }

    const handleChangeAnswer = (event) => {
        setAnswer(event.target.value);
    }

    useEffect(() => {
        //timer for quiz - when timer reach 0 end screen appear
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (timer === false || counter === 0) {
            setGameState("end");
        }
        return () => clearInterval(timer);
    }, [counter, setCounter, setGameState])

    useEffect(() => {
        if (!question) nextQuestion()
    });

    const nextQuestion = () => {
        clock();
    }

    const cancel = () => {
        setScore(0);
        setCounter(60);
        setGameState("main");
    }

    return (
        <div id="bg-app" className='fadeIn' style={styleBg}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div style={styleNight}>
                {night === "am" && <BsMoonStarsFill />}
                {night === "pm" && <BsFillSunFill />}
                {night}
            </div>
            <section className="fadeIn">
                <p className='text-score'>Score : {score}</p>
                <p className='text-time'>Temps : <span style={{ color: counter < 11 && '#FF5B52' }}>{counter}</span></p>
                <Clock />
                <form onSubmit={handleSubmitAnswer}>
                    <Cleave
                        placeholder="HH:MM"
                        options={{
                            time: true,
                            timePattern: ['h', 'm']
                        }}
                        className="form-field"
                        value={answer} onChange={handleChangeAnswer}
                    />
                    <button className="btn btn-start" type="submit">Valider</button>
                </form>
                <button className="btn btn-cancel" onClick={() => { cancel(); }}>Quitter le test</button>
            </section>
        </div>
    )
}

export default Quiz;