import Link from "next/link";
import React from "react";

type Results = {
    answeredQuestions: any[];
    callback: () => void;
}
type ResultProps = {
    results: Results;
}

export default function Results({ results }: ResultProps) {

    if (!results) {
        return null;
    }
    
    let correctAnswers = results.answeredQuestions.filter((element) => {
        return element.translation === element.answer;
    });

    return (
        <div className="card shadow rounded" id="card-container">
            <div className="card-body py-5 px-5" id="card">
                <h2 className="card-title text-center mb-5">Your Score: {correctAnswers.length} / {results.answeredQuestions.length}</h2>
                <div className="list-group text-center">
                    <a href="#" className="list-group-item list-group-item-action mb-3" onClick={() => results.callback()}>Try Again</a>
                    <Link href="/" className="list-group-item list-group-item-action">See Your Results</Link>
                </div>
            </div>
        </div>
    );
}