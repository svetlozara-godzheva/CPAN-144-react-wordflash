"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import FlashCard from "./components/FlashCard";
import { delay, loadWords, selectWords } from "../services/wordsService";

const wordsCount = 2;
const selectedLanguage = "se";
const flashInterval = 5000;
const wordAnimationDelay = 500;

export default function Wordflash() {

    const [counter, setCounter] = useState(0);
    const [currentWord, setCurrentWord] = useState({});
    const [isVisible, setIsVisible] = useState(false);

    async function loadLearningStage() {
        let words = await loadWords(selectedLanguage);
        let learningStageWords = selectWords(words, wordsCount);
        await flashWords(learningStageWords);
    }

    async function flashWords(words: any[]) {
        let wordsToFlash = [...words];
        let count = 0;
        while (wordsToFlash.length > 0) {
            count++;

            setIsVisible(false);
            await delay(wordAnimationDelay);
            setCurrentWord(wordsToFlash.pop())
            setCounter(count);
            setIsVisible(true);
            // to read the card
            await delay(flashInterval);

        }
    }

    useEffect(() => {
        console.log("Use effect called");
        loadLearningStage();
    }, []);

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
                        <FlashCard word={currentWord} isVisible={isVisible} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className={`col ${counter === 0 ? "hidden" : ""}`}>
                        <p className="text-center fs-5" id="progress-counter">{counter} / {wordsCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}