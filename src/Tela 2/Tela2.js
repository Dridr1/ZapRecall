import logoMini from "../assets/logo-mini.png";
import Flashcard from "./Flashcard";
import { useState } from "react";
import "./Tela2.css";


export default function Tela2(props) {

    const [flashCardNum, setFlashCardNum] = useState(0);

    function nextCard() {
        if(flashCardNum === 7) return props.endSection;
        setFlashCardNum(flashCardNum+1);
    }

    return (
        <>
            <div className="tela2">
                <div className="top"><img src={logoMini} alt="ZapRecall!!" /></div>
                <span className="deck-name">{props.deckName}</span>
                <Flashcard endSection={props.endSection} setAllOK={props.setAllOK} flashCardNum={flashCardNum} nextCard={nextCard} card={props.deck[flashCardNum]}/>
            </div>
        </>
    );
}