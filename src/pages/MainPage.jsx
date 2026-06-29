import "../styles/mainPage.css"
import { useNavigate } from "react-router"

export const MainPage = () => {
    const navigate = useNavigate()

    return(
        <div className="main-page-bg">
        <div className="main-page-container">
            <div className="cuadrado">
                <h2>PALABRAS</h2>
                <h2>ENCADENADAS</h2>
            </div>
            <button className="option-text" onClick={() => navigate("/play")}>
                JUGAR
            </button>
            <button className="option-text">
                LEADERBOARD
            </button>
            <p className="max-points-text">Puntaje maximo - XXXXXX</p>
        </div>
        </div>
    )
}