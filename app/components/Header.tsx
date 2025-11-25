"use client"
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const hiddenRoutes = ["/wordflash"];

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);

    const show = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
    }

    const hide = () => {
        if (isVisible) {
            setIsVisible(false);
        }
    }

    if (hiddenRoutes.indexOf(usePathname()) >= 0) {
        hide();
    }
    else {
        show();
    }

    return (
        <div className={`p-4 mb-4 bg-body-tertiary ${!isVisible ? "hidden" : ""}`}>
            <div className="container-fluid">
                <h1 className="display-5 fw-bold">Welcome to WordFlash</h1>
                <p className="col fs-4">Flashcards are an effective and fast way of learning as it forces people to
                    actively recall new information. WordFlash is a web application that helps users learn words in a
                    foreign language with the help of flashcards.</p>
            </div>
        </div>
    );
}