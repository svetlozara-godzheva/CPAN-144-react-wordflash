import React from "react";

type FlashCardProps = {
    word: any
    isVisible: boolean;
}

export default function FlashCard({ word, isVisible }: FlashCardProps) {
    return (
        <div className={`card shadow rounded ${!isVisible ? "transparent" : ""}`} id="card-container">
            <div className="card-body py-5 px-5" id="card">
                <h2 className="card-title text-center mb-5">{word.word}</h2>
                <h4 className="card-title text-center mb-5">{word.translation}</h4>
                <p className="card-text text-body-secondary">{word.meaning}</p>
            </div>
        </div>
    );
}