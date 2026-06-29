import { useEffect, useState } from "react"
import { Hudbar } from "../components/HudBar"
import { InputWords } from "../components/InputWords"
import "../styles/playPage.css"
import { UsedWords } from "../components/UsedWords"
import { GameOverModal } from "../components/GameOverModal"

export const PlayPage = () => {
    const [points, setPoints] = useState(0)
    const [timer, setTimer] = useState("xx")
    const [words, setWords] = useState([])
    const [isStarted, setIsStarted] = useState(false)
    const [lastWord, setLastWord] = useState('')
    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
        if (isStarted) {
            const interval = setInterval(() => {
                setTimer((t) => t - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isStarted])

    useEffect(() => {
        if (isStarted && timer === 0) {
            setIsStarted(false)
            setGameOver(true)
        }
    }, [timer]);

    return(
        <div className="play-bg">
            <Hudbar time={timer} points={points} />
            <GameOverModal 
                isGameOver={gameOver} 
                points={points} 
                wordsCount={words.length}
            />
            <div className="play-container">
                <InputWords 
                    setTimer={setTimer}
                    setStarted={setIsStarted}
                    words={words}
                    setWords={setWords}
                    lastWord={lastWord}
                    setLastWord={setLastWord}
                    setPoints={setPoints}
                />
                <UsedWords wordsUsed={words} />
            </div>
        </div>
    )
}