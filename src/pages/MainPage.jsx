import "../styles/mainPage.css"
import { useNavigate } from "react-router"

export const MainPage = () => {
    const navigate = useNavigate()
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) ?? [];

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
            <div className="cuadrado leaderboard-side">
                <p className="leaderboard-title">Leaderboard</p>
                {leaderboard.length == 0 ? 
                <p>No hay puntajes aun</p>
                :
                <ol>
                    {leaderboard.map((s) => <li>{s}</li>)}
                </ol>
                }
            </div>
        </div>
        </div>
    )
}