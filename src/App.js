import React, { useState } from "react";
import Main from "./components/main/Main";
import Quiz from "./components/quiz/Quiz";
import End from "./components/end/End";
import { QuizContext } from './helpers/Contexts';

import './App.css';

const App = () => {

  const [counter, setCounter] = useState(60);
  const [questions, setQuestions] = useState();
  const [format, setFormat] = useState(12);
  const [showNumbers, setShowNumbers] = useState("true");
  const [night, setNight] = useState("");
  const [gameState, setGameState] = useState("main");
  const [score, setScore] = useState(0);

  return <div className="App" id="app">
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore, questions, setQuestions, format, setFormat, showNumbers, setShowNumbers, counter, setCounter, night, setNight }}>
      {gameState === "main" && <Main />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "end" && <End />}
    </QuizContext.Provider>
  </div>
}

export default App;