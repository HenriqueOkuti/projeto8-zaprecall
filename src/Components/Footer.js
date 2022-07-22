import React from 'react';
import Correct from '../resources/correct.svg'
import Doubt from '../resources/doubt.svg'
import Wrong from '../resources/wrong.svg'
import Party from '../resources/partyEmoji.svg'
import Sad from '../resources/sadEmoji.svg'

export default function Footer({ result, deck_length, setStatus }) {
    return renderFooterCount(result, deck_length, setStatus);
};

function renderFooterCount(array, deck_length, setStatus) {
    let answers = reviewAnswers(array);
    let answers_Icon = translateToIcon(answers);
    if (array[0] === undefined) {
        return (
            <div className="footer">
                <div className="footer_content">{array.length}/{deck_length} Concluidos</div>
            </div>
        );
    };
    if (array.length === deck_length) {
        return (
            <div className="footer_final">
                <EndOfRecall array={answers} deck_length={deck_length} setStatus={setStatus} />
                <div className="footer_emojis">{answers_Icon.map((e =>
                    <img src={e} alt="alt text" />
                ))}</div>
            </div>
        );
    };
    if (array[0] !== undefined) {
        return (
            <div className="footer">
                <div className="footer_content">{array.length}/{deck_length} Concluidos</div>
                <div className="footer_emojis">{answers_Icon.map((e =>
                    <img src={e} alt="alt text" />
                ))}</div>
            </div>
        );
    };
}

function reviewAnswers(array) {
    let answers = array.map((e, i, a) => e[1]);
    return answers;
};
function translateToIcon(array) {
    let array_icons = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'G') {
            array_icons.push(Correct);
        };
        if (array[i] === 'O') {
            array_icons.push(Doubt);
        };
        if (array[i] === 'R') {
            array_icons.push(Wrong);
        };
    };
    return array_icons;
};
function EndOfRecall(obj) {
    let total = obj.deck_length;
    let array = obj.array;
    // let count = 0;
    // array.map((e) => (e === 'G' || e === 'O') ? count++ : 0);
    if (!array.includes("R")) {
        return (
            <React.Fragment>
                <div className="footer_result"><img src={Party} alt="alt text" /> Parabéns!</div>
                <div className="footer_result_text">Você não esqueceu de nenhum flashcard!</div>
                <div className="footer_points">{array.length}/{total} Concluidos</div>
                <Restart setStatus={obj.setStatus} />
            </React.Fragment>
        );
    };
    if (array.includes("R")) {
        return (
            <React.Fragment>
                <div className="footer_result"><img src={Sad} alt="alt text" /> Putz...</div>
                <div className="footer_result_text">Ainda faltam alguns... Mas não desanime!</div>
                <div className="footer_points">{array.length}/{total} Concluidos</div>
                <Restart setStatus={obj.setStatus} />
            </React.Fragment>
        );
    };
};


function Restart(setStatus) {
    return (
        <div className="restart" onClick={() => setStatus.setStatus(!true)}>
            <div className="restart_text">Reiniciar Recall</div>
        </div>
    );
}

//Implementar Bonus: Voltar para tela inicial ou reiniciar quizz
        //Como resetar as variaveis de estado?
//Implementar Bonus: Comparar resultado com a meta
