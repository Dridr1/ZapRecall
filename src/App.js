import { useState } from 'react'
import "./reset.css";
import Tela1 from './Tela 1/Tela1';
import Tela2 from './Tela 2/Tela2';
import Tela3 from './Tela 3/Tela3';

export default function App() {

    const deckReact = [
        { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript', cardNum: '1' },
        { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces', cardNum: '2' },
        { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula', cardNum: '3' },
        { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões', cardNum: '4' },
        { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma', cardNum: '5' },
        { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências', cardNum: '6' },
        { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes', cardNum: '7' },
        { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', cardNum: '8' },
    ];

    const deckJS = [
        { question: 'O que é JavaScript?', answer: 'Uma linguagem de programação', cardNum: '1' },
        { question: 'Quais são os tipos de variáveis primitivas?', answer: 'Números, BigInts, Strings, Undefined, Boolean e Symbols ', cardNum: '2' },
        { question: 'O que separa valores de um array?', answer: 'A vírgula `,`', cardNum: '3' },
        { question: 'Onde o JavaScript é usado?', answer: 'Em navegadores', cardNum: '4' },
        { question: 'JavaScript é uma linguagem de ____ nível', answer: 'alto', cardNum: '5' },
        { question: 'Eventos são __', answer: 'Ações que ocorrem no DOM', cardNum: '6' },
        { question: 'Bubbling é uma forma de propagação de eventos que ocorre __', answer: 'do evento mais interno para o evento mais externo', cardNum: '7' },
        { question: 'OnClick e onKeydown são __', answer: 'Event Handlers', cardNum: '8' }
    ];

    const [deck, setDeck] = useState('React');
    const [allOK, setAllOK] = useState(true);

    function selectDeck(deck) {
        setDeck(deck);
        setScreen('T2');
    };

    function endSection() {
        setScreen('T3');
    }

    const [screen, setScreen] = useState('T1');

    return ( 
        <>
            {screen === 'T1' ? <Tela1 setDeck={selectDeck} setScreen={setScreen} /> : screen === 'T2' ? <Tela2 deckName={deck === 'deckReact' ? 'React' : 'JavaScript'} setAllOK={setAllOK} endSection={endSection} deck={deck === 'deckReact'  ? deckReact : deckJS}/> : <Tela3 allOK={allOK}/>}
        </>
    );
}