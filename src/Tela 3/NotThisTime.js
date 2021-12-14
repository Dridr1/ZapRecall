import sad from "../assets/sad.png"
import "./NotThisTime.css";

export default function NotThisTime() {
    return(
        <>
            <span className="titulo">Putz.. <img src={sad} alt="Sad" /></span>
            <span className="subtitulo">Você esqueceu alguns flashcards... <br /> Não desanime! Na próxima você consegue!</span>
        </>
    );
}