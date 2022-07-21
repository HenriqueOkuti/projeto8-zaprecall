import React from "react";
import Background from "./Background";
import Recall from "./Recall";
import StartPage from "./StartPage";

export default function App() {
    const [status, setStatus] = React.useState(!true);
    return (
        <React.Fragment>
            <Background />
            {status ? <LoadQuizz /> : <LoadStart setStatus={setStatus} />}
        </React.Fragment>
    );
}

function LoadQuizz() {
    return (
        <Recall />
    );
}

function LoadStart(setStatus) {
    return (
        <StartPage setStatus={setStatus.setStatus} />
    );
}