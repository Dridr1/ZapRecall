import "./Back.css";

export default function Back(props) {

    function setColorAndCheck(allOk, color){
        if(!allOk) props.setAllOK(false);
        props.setColor(color);
        props.nextFace();
    }

    return(
        <div className="back">
            <span className="card-num">{props.flashCardNum + 1}/8</span>
            <span className="question">{props.card.question}</span>
            <span className="answer">{props.card.answer}</span>
            <div className="buttons">
                <button onClick={() => setColorAndCheck(false, 'black')}>Aprendi agora</button>
                <button onClick={() => setColorAndCheck(false, 'red')}>Não lembrei</button>
                <button onClick={() => setColorAndCheck(true, 'green')}>Lembrei com esforço</button>
                <button onClick={() => setColorAndCheck(true, 'yellow')}>Zap!</button>
            </div>
        </div>
    )
}