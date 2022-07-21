export default function QuestionSelected(question, image, setState) {
    return (
        <div className="question_selected">
            <div className="question_selected_text">{question.question}</div>
            <div onClick={() => setState([2, 0])} className="flip_question">
                <img src={image} alt="Alt text" />
            </div>
        </div>
    );
}