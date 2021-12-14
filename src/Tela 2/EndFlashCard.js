import "./EndFlashCard.css";
import turn from "../assets/turn.png";

export default function EndFlashCard(props) {

    function nextCard() {
        if (props.flashCardNum !== 7) {
            props.nextCard();
            props.nextFace();
        }
        else props.endSection();
    }
    
    return (
        <>
            <div className={'end-flash-card ' + props.borderColor}>
                <span data-identifier="counter" className="card-num">{props.flashCardNum + 1}/8</span>
                <span className="question">{props.card.question}</span>
                <span>{props.card.answer}</span>
                <img data-identifier="arrow" onClick={nextCard} src={turn} alt="Próximo FlashCard" />
            </div>
        </>
    );
}