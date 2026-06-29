import "../styles/usedWords.css"

export const UsedWords = ({wordsUsed}) => {
    return(
        <div className="words-container">
            <p className="words-used-title">Palabras ya usadas</p>
            <div className="listed-words-container">
            {
                wordsUsed.map((w) => (
                    <p className="grid-item">{w}</p>
                ))
            }
            </div>
        </div>
    )
}