export default function Back(props){
    return(
        <div className="flashcardBack">
            <span className="question-back">{props.question}</span>
            <span className="answer">{props.answer}</span>
            <div className="buttons">
                <button>Aprendi agora</button>
                <button>Não lembrei</button>
                <button>Lembrei com esforço</button>
                <button>Zap!</button>
            </div>
        </div>
    )
}