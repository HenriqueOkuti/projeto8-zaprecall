import React from "react";
import Logo from '../resources/zapLogo.svg';
import Expand from '../resources/expand.svg';

export default function StartPage({ setStatus, setDeck }) {
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
                            <li onClick={() => { setDeck('deck_fib') }}>Deck Fibonacci</li>
                            <li onClick={() => { setDeck('deck_fat') }}>Deck Fatorial</li>
                            <li onClick={() => { setDeck('deckJSX') }}>Deck JSX</li>
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

//Implementar Bonus: Inserir meta de Zaps
//Implementar Bonus: Escolher Deck para jogar 