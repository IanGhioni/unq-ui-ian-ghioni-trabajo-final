import { Link } from "react-router"
import sonic from "../assets/images/sonic.gif"
import "../styles/notFound.css"

export const NotFound = () => {
    return(
        <div className="notFoundContainer">
            <p className="notFound-text">No deberias estar aca, esta pagina no existe. Aca no hay nada.</p>
            <img src={sonic} width={120}></img>
            <Link className="link" to={"/"}>Volver al menu principal</Link>
        </div>
    )
}