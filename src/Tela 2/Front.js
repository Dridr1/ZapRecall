import turn from "../assets/turn.png";
import "./Front.css";

export default function Front(props) {
    return (
        <div className="front">
            <span data-identifier="counter">{props.flashCardNum + 1}/8</span>
            <span className="question">{props.card.question}</span>
            <img data-identifier="arrow" onClick={props.nextFace} src={turn} alt="Ver resposta" />
        </div>
    );
}