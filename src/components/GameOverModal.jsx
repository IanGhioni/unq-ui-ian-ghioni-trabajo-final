import { useNavigate } from "react-router";
import "../styles/gameOver.css"

export const GameOverModal = ({isGameOver, points, wordsCount}) => {
    const navigate = useNavigate()

    if (!isGameOver) return null;

    return(
        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
                <p className="gameOver-title text-shadow">Fin del juego</p>
                <div className="modal-content-sides">
                        <div className="stats-container">
                            <p className="stats-text text-align-left gameOver-text">Puntos</p>
                            <p className="stats-text gameOver-text">{points}</p>
                        </div>
                        <div className="stats-container">
                            <p className="stats-text text-align-left gameOver-text">Cant de palabras</p>
                            <p className="stats-text gameOver-text">{wordsCount}</p>
                        </div>
                    <div className="linea" />
                    <div className="button-container">
                        <button 
                            className="buttonOption"
                            onClick={() => navigate(0)}
                        >
                            Rejugar
                        </button>
                        <button 
                            className="buttonOption"
                            onClick={() => navigate("/")}
                        >
                            Volver al menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}