import Link from "next/link";
import React from "react";
import FlashCard from "./components/FlashCard";
import ProgressCounter from "./components/ProgressCounter";

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
                        <FlashCard />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <ProgressCounter />
                    </div>
                </div>
            </div>
        </div>
    );
}