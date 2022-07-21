import React from 'react';
import Correct from '../resources/correct.svg'
import Doubt from '../resources/doubt.svg'
import Wrong from '../resources/wrong.svg'
import Party from '../resources/partyEmoji.svg'
import Sad from '../resources/sadEmoji.svg'

export default function Footer(result) {
    return renderFooterCount(result.result);
}

function renderFooterCount(array) {
    let answers = reviewAnswers(array);
    let answers_Icon = translateToIcon(answers);

    if (array[0] === undefined) {
        return (
            <div className="footer">
                <div className="footer_content">{array.length}/4 Concluidos</div>
            </div>
        );
    }
    if (array.length === 4) {
        return (
            <div className="footer_final">
                <EndOfRecall array={answers} />
                <div className="footer_emojis">{answers_Icon.map((e =>
                    <img src={e} alt="alt text" />
                ))}</div>
            </div>
        );
    }
    if (array[0] !== undefined) {
        return (
            <div className="footer">
                <div className="footer_content">{array.length}/4 Concluidos</div>
                <div className="footer_emojis">{answers_Icon.map((e =>
                    <img src={e} alt="alt text" />
                ))}</div>
            </div>
        );
    }


}

function reviewAnswers(array) {
    let answers = array.map((e, i, a) => e[1]);
    return answers;
}

function translateToIcon(array) {
    let array_icons = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'G') {
            array_icons.push(Correct);
        }
        if (array[i] === 'O') {
            array_icons.push(Doubt);
        }
        if (array[i] === 'R') {
            array_icons.push(Wrong);
        }
    }
    return array_icons;
}

function EndOfRecall(obj) {

    let array = obj.array;
    let count = 0;
    array.map((e) => (e === 'G' || e === 'O') ? count++ : 0);

    if (count === array.length) {
        return (
            <React.Fragment>
                <div className="footer_result"><img src={Party} alt="alt text" /> Parabéns!</div>
                <div className="footer_result_text">Você não esqueceu de nenhum flashcard!</div>
                <div className="footer_points">{count}/4 Concluidos</div>
            </React.Fragment>
        );
    }
    if (count !== array.length) {
        return (
            <React.Fragment>
                <div className="footer_result"><img src={Sad} alt="alt text" /> Putz...</div>
                <div className="footer_result_text">Ainda faltam alguns... Mas não desanime!</div>
                <div className="footer_points">{count}/4 Concluidos</div>
            </React.Fragment>
        );
    }


}