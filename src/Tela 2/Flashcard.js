import { useState } from "react";
import Front from "./Front";
import "./Flashcard.css";
import Back from "./Back";
import EndFlashCard from "./EndFlashCard";

export default function Flashcard(props) {
    const [currentFace, setCurrentFace] = useState('front');
    const [color, setColor] = useState('yellow');

    function nextFace(face) {
        setCurrentFace(face);
    }

    return(
        <div data-identifier="flashcard" className="flashcard">
            {currentFace === 'front' ? <Front card={props.card} flashCardNum={props.flashCardNum} nextFace={() => nextFace('back')}/> : currentFace === 'back' ? <Back nextFace={() => nextFace('end')} setColor={setColor} setAllOK={props.setAllOK} flashCardNum={props.flashCardNum} card={props.card}/> : <EndFlashCard endSection={props.endSection} flashCardNum={props.flashCardNum} card={props.card} borderColor={color} nextFace={() => nextFace('front')} nextCard={props.nextCard}/>}
        </div>
    );
};