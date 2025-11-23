import Link from "next/link";
import React from "react";

export default function StartWordflash() {
    return (
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 text-center">
                <Link href="/wordflash" className="btn btn-primary btn-lg btn-xlg">
                    Start WordFlash
                </Link>
            </div>
            <div className="col-lg-4"></div>
        </div>
    );
}