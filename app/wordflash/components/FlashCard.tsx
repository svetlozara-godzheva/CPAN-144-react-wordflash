import React from "react";

export default function FlashCard() {
    return (
        <div className="card shadow rounded" id="card-container">
            <div className="card-body py-5 px-5" id="card">
                <h2 className="card-title text-center mb-5">hej</h2>
                <h4 className="card-title text-center mb-5">hello</h4>
                <p className="card-text text-body-secondary">A greeting or expression used when meeting someone.</p>
            </div>
        </div>
    );
}