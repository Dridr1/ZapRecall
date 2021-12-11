import { useState } from "react";
import Back from "./Back";
import Front from "./Front";

export default function Flashcard(props) {
    const [face, setface] = useState('front');

    function turnFlashCard(){
        setface('back');
    };

    return (
        <div className="flashcard">
            <span className="pageCounter">{props.pageCounter}/8</span>
            {face === 'front' ? <Front question="O que é JSX?" turnFlashCard={turnFlashCard}/> : <Back question="O que é JSX?" answer="É onde o filho chora e a mãe não vê, tlgd?" pageCounter="1" />}
        </div>
    );
}