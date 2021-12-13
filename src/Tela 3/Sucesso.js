import party from "../assets/party.png"
import "./Sucesso.css"
export default function Sucesso() {
    return(
        <>
            <span className="titulo">PARABÉNS <img src={party} alt="Party" /></span>
            <span className="subtitulo">Você não esqueceu de nenhum flashcard!</span>
        </>
    )
}