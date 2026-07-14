import "../styles/inputWords.css"
import { useState } from "react";
import { validateWord } from "../utils/validateWord";

export const InputWords = ({setTimer, setStarted, words, setWords, lastWord, setLastWord, setPoints, gameOverRef}) => {

    const [word, setWord] = useState('');
    const [error, setError] = useState(" ")

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            setWord('')
            validate()
        }
    };

    async function validate() {
        setError("Validando...")
        const result = await validateWord(word, lastWord, words);
        if (gameOverRef.current) {
            setError('')
            return;
        }
        if (result.valid) {
            setStarted(true)
            setTimer(15)
            setLastWord(word);
            setWords(prev => [word, ...prev])
            setError('')
            setPoints(prev => prev + word.length)
        }
        else {
            setError(result.message)
        }
    }

    return(
        <div className="container">
            <div className="error-container">
                <p className="error-text">
                    {error}
                </p>
            </div>
            <input 
                className="input-text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                onKeyDown={handleEnter}
                type="text" 
                name="words" 
                placeholder="Escribe aqui...">
            </input>
        </div>
    )
}