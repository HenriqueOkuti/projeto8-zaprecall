import React from "react";
import Background from "./Background";
import Recall from "./Recall";
import StartPage from "./StartPage";

export default function App() {
    const [status, setStatus] = React.useState(!true);
    const [deckRecall, setDeck] = React.useState('deckJSX');
    return (
        <React.Fragment>
            <Background />
            {status ? <LoadQuizz setStatus={setStatus} deckRecall={deckRecall} /> : <LoadStart setStatus={setStatus} setDeck={setDeck} />}
        </React.Fragment>
    );
};
function LoadQuizz({deckRecall, setStatus}) {
    return (
        <Recall deckRecall={deckRecall} setStatus={setStatus} />
    );
};
function LoadStart({setStatus, setDeck}) {

    return (
        <StartPage setStatus={setStatus} setDeck={setDeck} />
    );
};