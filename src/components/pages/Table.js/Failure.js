import sad from "../../../assets/sad.png"

export default function Failure(){
    return(
        <div className="end-screen">
            <span>Putz... <img src={sad}/></span>
            <span>Você esqueceu alguns flashcards...<br/>Não desanime! Na próxima você consegue!</span>
        </div>
    )
}