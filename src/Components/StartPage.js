import React from "react";
import Logo from '../resources/zapLogo.svg';
import Expand from '../resources/expand.svg';
import react from "react";
import Correct from '../resources/correct.svg';

export default function StartPage({ setStatus, setDeck }) {

    const [selected, setSelected] = react.useState('not_clicked');
    if (selected === 'clicked') {
        console.log('clicou');
    }

    return (
        <div className="start_page">
            <div className="page_logo">
                <img src={Logo} alt="" />
            </div>
            <div className="page_title">
                ZapRecall
            </div>
            <div className="interactive_buttons">
                <div className="dropdown_menu">
                    <ul className="dropdown_container">
                        <textarea placeholder="Escolha seu deck">
                        </textarea>
                        <ul className="dropdown_content">
                            <li onClick={() => { setDeck('deck_fib'); setSelected([0, 'clicked']) }} className={verifyClick(0, selected)}>
                                Deck Fibonacci
                                <img src={Correct} alt="alt text" />
                            </li>
                            <li onClick={() => { setDeck('deck_fat'); setSelected([1, 'clicked']) }} className={verifyClick(1, selected)}>
                                Deck Fatorial
                                <img src={Correct} alt="alt text" />
                            </li>
                            <li onClick={() => { setDeck('deckJSX'); setSelected([2, 'clicked']) }} className={verifyClick(2, selected)}>
                                Deck JSX
                                <img src={Correct} alt="alt text" />
                            </li>
                        </ul>
                        <ul className="expand_buttom">
                            <li>
                                <img src={Expand} alt="alt text" />
                            </li>
                        </ul>
                    </ul>
                </div>

                <div onClick={() => { setStatus(true) }} className="page_buttom">
                    <div className="buttom_text">Começa ai!!!</div>
                </div>
            </div>
        </div>
    );
};

function verifyClick(i, array) {
    if (array[0] === i) {
        return 'clicked';
    };
    if (array[0] !== i) {
        return 'not_clicked';
    };
};