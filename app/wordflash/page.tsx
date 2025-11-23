import Link from "next/link";
import React from "react";

export default function Wordflash() {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <Link href="/" className="btn btn-primary btn-lg">
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                        <div className="card shadow rounded" id="card-container">
                            <div className="card-body py-5 px-5" id="card">
                                <h2 className="card-title text-center mb-5">hej</h2>
                                <h4 className="card-title text-center mb-5">hello</h4>
                                <p className="card-text text-body-secondary">A greeting or expression used when meeting someone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <p className="text-center fs-5" id="progress-counter"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}