import React from "react";
import Background from "./Background";
import Recall from "./Recall";
import StartPage from "./StartPage";

export default function App() {
    const [status, setStatus] = React.useState(!true);
    const [deckRecall, setDeck] = React.useState('deckJSX');
    console.log(deckRecall);
    return (
        <React.Fragment>
            <Background />
            {status ? <LoadQuizz deckRecall={deckRecall} /> : <LoadStart setStatus={setStatus} setDeck={setDeck} />}
        </React.Fragment>
    );
};
function LoadQuizz({deckRecall}) {
    return (
        <Recall deckRecall={deckRecall} />
    );
};
function LoadStart({setStatus, setDeck}) {

    return (
        <StartPage setStatus={setStatus} setDeck={setDeck} />
    );
};