import Link from "next/link";
import React from "react";

export default function Statistics() {
    return (
        <div className="col-lg-4 text-center mb-5">
            <h5 className="mb-4">Statistics</h5>
            <ul className="list-group" id="statistics">
                <li className="list-group-item">Average Quiz Time: 53 sec</li>
                <li className="list-group-item">Total Wrong Answers: 4</li>
                <li className="list-group-item">Total Right Answers: 6</li>
            </ul>
        </div>
    );
}