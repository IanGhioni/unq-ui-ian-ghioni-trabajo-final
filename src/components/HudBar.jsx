import "../styles/hudBar.css"

export const Hudbar = ({points, time}) => {
    return(
        <div className="hud-container">
            <div  className="hud-text-container">
                <p className="hud-text">Puntos </p>
                <p className="hud-text">{points} </p>
            </div>
            <div>
                <p className="hud-text">Tiempo</p>
                <p className="hud-text">{time}</p>
            </div>
        </div>
    )
}