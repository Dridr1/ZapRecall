import logo from "../assets/logo.png";
import next from "../assets/next.png";
import { useState } from "react";
import "./Tela1.css";

export default function Tela1(props) {

    return (
        <div className="tela1">
            <img src={logo} alt="ZapRecall!" />
            <div className="tela1-buttons">
                <button onClick={()=>props.setDeck('deckReact')}>Praticar React <img src={next} /></button>
                <button onClick={() =>props.setDeck('deckJS')}>Praticar JavaScript <img src={next} /></button>
            </div>
        </div>
    );
}