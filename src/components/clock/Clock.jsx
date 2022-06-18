import React, { useContext } from 'react';
import { QuizContext } from '../../helpers/Contexts';

import './Clock.css';

const Clock = () => {

    const { format } = useContext(QuizContext);
    const { showNumbers } = useContext(QuizContext);

    if (parseInt(format) === 24) {
        if (showNumbers === "true") {
            return (
                <div className="clock fadeIn">
                    <div className="wrap">
                        <span id="heure"></span>
                        <span id="minute"></span>
                        <span className="dot"></span>
                        <div className="sep" id="best-h12">12</div>
                        <div className="sep" id="best-h13">13</div>
                        <div className="sep" id="best-h14">14</div>
                        <div className="sep" id="best-h15">15</div>
                        <div className="sep" id="best-h16">16</div>
                        <div className="sep" id="best-h17">17</div>
                        <div className="sep" id="best-h18">18</div>
                        <div className="sep" id="best-h19">19</div>
                        <div className="sep" id="best-h20">20</div>
                        <div className="sep" id="best-h21">21</div>
                        <div className="sep" id="best-h22">22</div>
                        <div className="sep" id="best-h23">23</div>
                        <div className="sep" id="best-h24">24</div>
                        <div className="sep" id="best-h1">1</div>
                        <div className="sep" id="best-h2">2</div>
                        <div className="sep" id="best-h3">3</div>
                        <div className="sep" id="best-h4">4</div>
                        <div className="sep" id="best-h5">5</div>
                        <div className="sep" id="best-h6">6</div>
                        <div className="sep" id="best-h7">7</div>
                        <div className="sep" id="best-h8">8</div>
                        <div className="sep" id="best-h9">9</div>
                        <div className="sep" id="best-h10">10</div>
                        <div className="sep" id="best-h11">11</div>
                        <div className="sep" id="m0">0</div>
                        <div className="sep" id="m5">5</div>
                        <div className="sep" id="m10">10</div>
                        <div className="sep" id="m15">15</div>
                        <div className="sep" id="m20">20</div>
                        <div className="sep" id="m25">25</div>
                        <div className="sep" id="m30">30</div>
                        <div className="sep" id="m35">35</div>
                        <div className="sep" id="m40">40</div>
                        <div className="sep" id="m45">45</div>
                        <div className="sep" id="m50">50</div>
                        <div className="sep" id="m55">55</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="clock fadeIn">
                    <div className="wrap">
                        <span id="heure"></span>
                        <span id="minute"></span>
                        <span className="dot"></span>
                        <div className="sep" id="best-h12">|</div>
                        <div className="sep" id="best-h13">|</div>
                        <div className="sep" id="best-h14">|</div>
                        <div className="sep" id="best-h15">|</div>
                        <div className="sep" id="best-h16">|</div>
                        <div className="sep" id="best-h17">|</div>
                        <div className="sep" id="best-h18">|</div>
                        <div className="sep" id="best-h19">|</div>
                        <div className="sep" id="best-h20">|</div>
                        <div className="sep" id="best-h21">|</div>
                        <div className="sep" id="best-h22">|</div>
                        <div className="sep" id="best-h23">|</div>
                        <div className="sep" id="best-h24">|</div>
                        <div className="sep" id="best-h1">|</div>
                        <div className="sep" id="best-h2">|</div>
                        <div className="sep" id="best-h3">|</div>
                        <div className="sep" id="best-h4">|</div>
                        <div className="sep" id="best-h5">|</div>
                        <div className="sep" id="best-h6">|</div>
                        <div className="sep" id="best-h7">|</div>
                        <div className="sep" id="best-h8">|</div>
                        <div className="sep" id="best-h9">|</div>
                        <div className="sep" id="best-h10">|</div>
                        <div className="sep" id="best-h11">|</div>
                        <div className="sep" id="m0">|</div>
                        <div className="sep" id="m5">|</div>
                        <div className="sep" id="m10">|</div>
                        <div className="sep" id="m15">|</div>
                        <div className="sep" id="m20">|</div>
                        <div className="sep" id="m25">|</div>
                        <div className="sep" id="m30">|</div>
                        <div className="sep" id="m35">|</div>
                        <div className="sep" id="m40">|</div>
                        <div className="sep" id="m45">|</div>
                        <div className="sep" id="m50">|</div>
                        <div className="sep" id="m55">|</div>
                    </div>
                </div>
            )
        }
    } else {
        if (showNumbers === "true") {
            return (
                <div className="clock fadeIn">
                    <div className="wrap">
                        <span id="heure"></span>
                        <span id="minute"></span>
                        <span className="dot"></span>
                        <div className="sep" id="h0">0</div>
                        <div className="sep" id="h1">1</div>
                        <div className="sep" id="h2">2</div>
                        <div className="sep" id="h3">3</div>
                        <div className="sep" id="h4">4</div>
                        <div className="sep" id="h5">5</div>
                        <div className="sep" id="h6">6</div>
                        <div className="sep" id="h7">7</div>
                        <div className="sep" id="h8">8</div>
                        <div className="sep" id="h9">9</div>
                        <div className="sep" id="h10">10</div>
                        <div className="sep" id="h11">11</div>
                        <div className="sep" id="m0">0</div>
                        <div className="sep" id="m5">5</div>
                        <div className="sep" id="m10">10</div>
                        <div className="sep" id="m15">15</div>
                        <div className="sep" id="m20">20</div>
                        <div className="sep" id="m25">25</div>
                        <div className="sep" id="m30">30</div>
                        <div className="sep" id="m35">35</div>
                        <div className="sep" id="m40">40</div>
                        <div className="sep" id="m45">45</div>
                        <div className="sep" id="m50">50</div>
                        <div className="sep" id="m55">55</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="clock fadeIn">
                    <div className="wrap">
                        <span id="heure"></span>
                        <span id="minute"></span>
                        <span className="dot"></span>
                        <div className="sep" id="h0">|</div>
                        <div className="sep" id="h1">|</div>
                        <div className="sep" id="h2">|</div>
                        <div className="sep" id="h3">|</div>
                        <div className="sep" id="h4">|</div>
                        <div className="sep" id="h5">|</div>
                        <div className="sep" id="h6">|</div>
                        <div className="sep" id="h7">|</div>
                        <div className="sep" id="h8">|</div>
                        <div className="sep" id="h9">|</div>
                        <div className="sep" id="h10">|</div>
                        <div className="sep" id="h11">|</div>
                        <div className="sep" id="m0">|</div>
                        <div className="sep" id="m5">|</div>
                        <div className="sep" id="m10">|</div>
                        <div className="sep" id="m15">|</div>
                        <div className="sep" id="m20">|</div>
                        <div className="sep" id="m25">|</div>
                        <div className="sep" id="m30">|</div>
                        <div className="sep" id="m35">|</div>
                        <div className="sep" id="m40">|</div>
                        <div className="sep" id="m45">|</div>
                        <div className="sep" id="m50">|</div>
                        <div className="sep" id="m55">|</div>
                    </div>
                </div>
            )
        }
    }
}

export default Clock;