"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import FlashCard from "./components/FlashCard";
import { collectResults, createQuestions, delay, loadWords, selectWords } from "../services/wordsService";
import Question from "./components/Question";
import Results from "./components/Results";

const wordsCount = 4;
const selectedLanguage = "se";
const flashInterval = 3000;
const wordAnimationDelay = 500;
const questionAnimationDelay = 100;

export default function Wordflash() {

    const [counter, setCounter] = useState(0);

    const [currentWord, setCurrentWord] = useState<any>();
    const [isFlashCardVisible, setIsFlashCardVisible] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState<any>();
    const [isQuestionVisible, setIsQuestionVisible] = useState(false);

    const [results, setResults] = useState<any>();

    async function loadLearningStage() {
        let words = await loadWords(selectedLanguage);
        let learningStageWords = selectWords(words, wordsCount);
        await flashWords(learningStageWords);
        await startQuiz(learningStageWords);
    }

    async function flashWords(words: any[]) {
        let wordsToFlash = [...words];
        let count = 0;
        while (wordsToFlash.length > 0) {
            count++;

            setIsFlashCardVisible(false);
            await delay(wordAnimationDelay);
            setCurrentWord(wordsToFlash.pop())
            setCounter(count);
            setIsFlashCardVisible(true);
            // to read the card
            await delay(flashInterval);
        }
    }

    async function startQuiz(words: any[]) {
        setCurrentWord(null);
        setCounter(0);
        await delay(questionAnimationDelay);
        let quizQuestions = createQuestions(words);
        let answeredQuestions = [];
        let counter = 0;
        let startTime = new Date();
        while (quizQuestions.length != 0) {
            counter++;
            let question = quizQuestions.pop();
            setIsQuestionVisible(false);
            await delay(questionAnimationDelay);
            setCurrentQuestion(question);
            setCounter(counter);
            setIsQuestionVisible(true);
            //wait for the question to be resolved
            question!.answer = await question?.getAnswer();
            answeredQuestions.push(question);
        }
        setCurrentQuestion(null);
        setCounter(0);
        let endTime = new Date();
        let quizTime = (endTime.getTime() - startTime.getTime()) / 1000;

        collectResults(answeredQuestions, quizTime);
        setResults({
            answeredQuestions: answeredQuestions,
            callback: () => {
                setResults(null);
                flashWords(words).then(() => {
                    startQuiz(words);
                });
            }
        });
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
                        <FlashCard word={currentWord} isVisible={isFlashCardVisible} />
                        <Question question={currentQuestion} isVisible={isQuestionVisible} />
                        <Results results={results} />
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