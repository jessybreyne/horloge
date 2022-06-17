import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Mounted");
    clock();
  }, []);

  function clock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

    document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
  }

  setInterval(clock, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Horloge test
        </a>
      </header>
      <div class="clock">
        <div class="wrap">
          <span class="heure"></span>
          <span class="minute"></span>
          <span class="seconde"></span>
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
    </div>
  );
}

export default App;
