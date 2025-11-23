import Link from "next/link";
import React from "react";

export default function LastWrongAnswers() {
    return (
        <div className="col-lg-4 text-center mb-5">
            <h5 className="mb-4">Last Wrong Answers</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Word</th>
                        <th scope="col">Meaning</th>
                    </tr>
                </thead>
                <tbody id="wrong-answers-body">
                    <tr><td>hej</td><td>hello</td></tr>
                    <tr><td>vän</td><td>friend</td></tr>
                    <tr><td>tack</td><td>thank you</td></tr>
                    <tr><td>familj</td><td>family</td></tr>
                </tbody>
            </table>
        </div>
    );
}