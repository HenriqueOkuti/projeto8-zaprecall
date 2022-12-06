import React from 'react';

export default function QuestionAnswered(
  question,
  image,
  setState,
  answered,
  setAnswered,
  index,
  setSize
) {
  return (
    <div className="question_answered">
      <div className="question_answer">{question.answer}</div>
      <div className="answer_options">
        <div
          onClick={() => {
            defineStates('R', setState, answered, setAnswered, index, setSize);
          }}
          className="red_option"
        >
          Não lembrei!
        </div>
        <div
          onClick={() => {
            defineStates('O', setState, answered, setAnswered, index, setSize);
          }}
          className="orange_option"
        >
          Quase não lembrei!
        </div>
        <div
          onClick={() => {
            defineStates('G', setState, answered, setAnswered, index, setSize);
          }}
          className="green_option"
        >
          Zap!
        </div>
      </div>
    </div>
  );
}

function defineStates(option, setState, answered, setAnswered, index, setSize) {
  updateAnswered(option, answered, setAnswered);
  updateSize(option, index, setSize);
  if (option === 'R') {
    return setState([0, 'R']);
  }
  if (option === 'O') {
    return setState([0, 'O']);
  }
  if (option === 'G') {
    return setState([0, 'G']);
  }
}

function updateAnswered(option, answered, setAnswered) {
  return setAnswered(option);
}

function updateSize(option, index, setSize) {
  return setSize([index, option]);
}
