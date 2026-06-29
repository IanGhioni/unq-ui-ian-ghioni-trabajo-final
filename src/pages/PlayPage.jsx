import { useEffect, useState } from "react"
import { Hudbar } from "../components/HudBar"
import { InputWords } from "../components/InputWords"
import "../styles/playPage.css"
import { UsedWords } from "../components/UsedWords"

export const PlayPage = () => {
    const [points, setPoints] = useState(0)
    const [timer, setTimer] = useState(0)
    const [words, setWords] = useState([])
    const [isStarted, setIsStarted] = useState(false)
    const [lastWord, setLastWord] = useState('')

    useEffect(() => {
        if (isStarted) {
            const interval = setInterval(() => {
                setTimer((t) => t - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isStarted])

    useEffect(() => {
        if (timer === 0) {
            setIsStarted(false)
        }
    }, [timer]);

    return(
        <div className="play-bg">
            <Hudbar time={timer} points={points} />
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