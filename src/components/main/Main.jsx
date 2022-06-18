import React, { useContext } from 'react';
import { QuizContext } from '../../helpers/Contexts';

import './Main.css';

const Main = () => {

    const { setGameState } = useContext(QuizContext);
    const { format, setFormat } = useContext(QuizContext);
    const { showNumbers, setShowNumbers } = useContext(QuizContext);

    const handleChangeFormat = (event) => {
        setFormat(event.target.value);
    }

    const handleChangeShowNumbers = (event) => {
        setShowNumbers(event.target.value);
    }

    return (
        <div id="bg-app">
            <section className="fadeIn">
                <header>
                    <a href="/" rel="noopener noreferrer">
                        <h1>Test de vitesse de lecture de l'heure en 12h ou 24h</h1>
                    </a>
                </header>
                <div className='card-group'>
                    <div className='card bg-format'>
                        <h2>Format de l'horloge</h2>
                        <select value={format} onChange={handleChangeFormat}>
                            <option value="12">12h</option>
                            <option value="24">24h</option>
                        </select>
                    </div>
                    <div className='card bg-numbers'>
                        <h2>Affichage des indexes sur l'horloge</h2>
                        <select value={showNumbers} onChange={handleChangeShowNumbers}>
                            <option value="true">Affichage des chiffres</option>
                            <option value="false">Masquer les chiffres</option>
                        </select>
                    </div>
                </div>
                <button onClick={() => { setGameState("quiz"); }} className="btn btn-start">Démarrer</button>
            </section>
        </div>
    )
}

export default Main;