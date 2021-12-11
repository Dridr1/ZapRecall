import turn from "../../../assets/turn.png";

export default function Front(props){
    return(
        <div className="flashcardFront">
            <span className="question-front">{props.question}</span>
            <img className="turn" onClick={props.turnFlashCard} src={turn} />
        </div>
    )
}