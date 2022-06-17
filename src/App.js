import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Mounted");
    clock();
    bestClock();
  }, []);

  function clock() {
    let date = new Date();
    let hours = ((date.getHours() + 11) % 12 + 1) + (date.getMinutes()/60);
    console.log(hours)
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hour = hours * 30;
    let minute = minutes * 6;
    let second = seconds * 6;

    document.getElementById('heure').style.transform = `rotate(${hour}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minute}deg)`;
    document.getElementById('seconde').style.transform = `rotate(${second}deg)`;
  }

  function bestClock() {
    let date = new Date();
    let hours = ((date.getHours() + 23) % 24 + 1) + (date.getMinutes()/60);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    // console.log(hours)
    let hour = hours * 15 + 180;
    let minute = minutes * 6;
    let second = seconds * 6;

    document.getElementById('best-heure').style.transform = `rotate(${hour}deg)`;
    document.getElementById('best-minute').style.transform = `rotate(${minute}deg)`;
    document.getElementById('best-seconde').style.transform = `rotate(${second}deg)`;
  }

  setInterval(clock, 1000);
  setInterval(bestClock, 1000);

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
          <span id="best-heure"></span>
          <span id="best-minute"></span>
          <span id="best-seconde"></span>
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
    </div>
  );
}

export default App;
