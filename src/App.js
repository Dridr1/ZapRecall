import { useState } from "react";
import StartScreen from "./components/pages/StartScreen/StartScreen";
import Table from "./components/pages/Table.js/Table";

export default function App(){
    const [currentScreen, setCurrentScreen] = useState('start');
    
    function initiateDeck(){
        setCurrentScreen('table');
    }

    return(
        currentScreen === 'start' ? <StartScreen initiate={initiateDeck} /> : <Table/>
    );
}