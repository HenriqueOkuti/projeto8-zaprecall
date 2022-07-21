import React from "react";
import Correct from '../resources/correct.svg'
import Doubt from '../resources/doubt.svg'
import Wrong from '../resources/wrong.svg'

export default function Question(index, image, state, setState) {

    return (
        <div className="question">
            {verifyState(index, image, state, setState)}
        </div >
    );
}

function verifyState(index, image, state, setState) {
    if (state[1] === 0) {
        return (
            <React.Fragment>
                <div className="question_title" >Pergunta {index + 1}</div>
                <div onClick={() => setState([1, 0])} className="open_question">
                    <img src={image} alt="Alt text" />
                </div>
            </React.Fragment>
        );
    }
    if (state[1] === 'G') {
        return (
            <React.Fragment>
                <div className="question_title slashedGreen" >Pergunta {index + 1}</div>
                <div className="open_question">
                    <img src={Correct} alt="Alt text" />
                </div>
            </React.Fragment>
        );
    }
    if (state[1] === 'O') {
        return (
            <React.Fragment>
                <div className="question_title slashedOrange" >Pergunta {index + 1}</div>
                <div className="open_question">
                    <img src={Doubt} alt="Alt text" />
                </div>
            </React.Fragment>
        );
    }
    if (state[1] === 'R') {
        return (
            <React.Fragment>
                <div className="question_title slashedRed" >Pergunta {index + 1}</div>
                <div className="open_question">
                    <img src={Wrong} alt="Alt text" />
                </div>
            </React.Fragment>
        );
    }
}