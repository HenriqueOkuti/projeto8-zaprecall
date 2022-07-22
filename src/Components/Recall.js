import Logo from '../resources/zapLogo.svg';
import Select from '../resources/select.svg';
import Flip from '../resources/flip.svg'
import Question from './Question';
import QuestionSelected from './QuestionSelected';
import QuestionAnswered from './QuestionAnswered';
import Header from './Header';
import Footer from './Footer';
import react from 'react';

let result = [];

const deck_fib = [
    {
        question: "1+1?",
        answer: '2'
    },
    {
        question: "1+2",
        answer: '3'
    },
    {
        question: "2+3?",
        answer: '5'
    },
    {
        question: "3+5?",
        answer: '8'
    }
];

const deck_fat = [
    {
        question: "1!",
        answer: '1'
    },
    {
        question: "2!",
        answer: '2'
    },
    {
        question: "3!",
        answer: '6'
    },
    {
        question: "4!",
        answer: '24'
    },
    {
        question: "5!",
        answer: '120'
    }
];

const deckJSX = [
    {
        question: "O que é JSX?",
        answer: 'Uma extensão de linguagem do JavaScript'
    },
    {
        question: "O React é __",
        answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        question: "Componentes devem iniciar com __",
        answer: 'letra maiúscula'
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: 'expressões'
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: "Usamos o npm para __",
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: "Usamos props para __",
        answer: 'passar diferentes informações para componentes '
    },
    {
        question: "Usamos estado (state) para __",
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
];

const deck_options = [
    {
        deck: deck_fib,
        deck_name: 'deck_fib'
    },
    {
        deck: deck_fat,
        deck_name: 'deck_fat'
    },
    {
        deck: deckJSX,
        deck_name: 'deckJSX'
    }
];
let deck_recall = [];

function FindDeck(name) {
    const deck_chosen = deck_options.filter((e, i) => e.deck_name === name ? e : 0);
    return deck_chosen[0].deck;
}

export default function Recall({ deckRecall }) {
    const [shuffled, setShuffled] = react.useState(false)
    if (shuffled === false) {
        deck_recall = ChooseDeck(FindDeck(deckRecall));
        setShuffled(true);
    }
    return (
        <div className="recall_container">
            <Header image={Logo} />
            <div className="questions">
                {deck_recall.map((e, i) => RenderCards(e, i))}
            </div>
            <Footer result={result} deck_length={deck_recall.length} />
        </div>
    );
};

function ChooseDeck(deckPicked) {
    let deckShuffled = [...deckPicked];
    deckShuffled.sort(() => Math.random() - 0.5);
    deckShuffled = deckShuffled.filter((e, i, a) => i < a.length ? e : 0);
    return deckShuffled;
};

function RenderCards(deckQuestion, index) {
    const [state, setState] = react.useState([0, 0]);
    const [answered, setAnswered] = react.useState('A');
    const [size, setSize] = react.useState(['notAnswered', 'notAnswered']);
    if (!result.includes(size) && size[1] !== 'notAnswered') {
        result.push(size);
    };
    if (state[0] === 0) {
        return Question(index, Select, state, setState);
    };
    if (state[0] === 1 && state[1] === 0) {
        return QuestionSelected(deckQuestion, Flip, setState);
    };
    if (state[0] === 2 && state[1] === 0) {
        return QuestionAnswered(deckQuestion, Select, setState, answered, setAnswered, index, setSize);
    };
};


