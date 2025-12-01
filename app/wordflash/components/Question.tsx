import React from "react";

type QuestionProps = {
    question: any;
    isVisible: boolean;
}

export default function Question({ question, isVisible }: QuestionProps) {

    if (!question) {
        return null;
    }

    return (
        <div className={`card shadow rounded ${!isVisible ? "transparent" : ""}`} id="card-container">
            <div className="card-body py-5 px-5" id="card">
                <h2 className="card-title text-center mb-5">{question.word}</h2>
                <div className="list-group list-group-horizontal text-center">
                    <a href="#" className="list-group-item list-group-item-action answer"
                        onClick={() => question.setAnswer(question.suggestions[0])}>{question.suggestions[0]}</a>
                    <a href="#" className="list-group-item list-group-item-action answer"
                        onClick={() => question.setAnswer(question.suggestions[1])}>{question.suggestions[1]}</a>
                </div>
                <div className="list-group list-group-horizontal text-center mt-3">
                    <a href="#" className="list-group-item list-group-item-action answer"
                        onClick={() => question.setAnswer(question.suggestions[2])}>{question.suggestions[2]}</a>
                    <a href="#" className="list-group-item list-group-item-action answer"
                        onClick={() => question.setAnswer(question.suggestions[3])}>{question.suggestions[3]}</a>
                </div>
            </div>
        </div>
    );
}