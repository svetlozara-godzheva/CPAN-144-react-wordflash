import React from "react";

export default function Header() {
    return (
        <div className="p-4 mb-4 bg-body-tertiary">
            <div className="container-fluid">
                <h1 className="display-5 fw-bold">Welcome to WordFlash</h1>
                <p className="col fs-4">Flashcards are an effective and fast way of learning as it forces people to
                    actively recall new information. WordFlash is a web application that helps users learn words in a
                    foreign language with the help of flashcards.</p>
            </div>
        </div>
    );
}