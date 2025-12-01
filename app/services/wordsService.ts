export async function loadWords(language: string) {
    return [
        {
            "word": "vän",
            "translation": "friend",
            "meaning": "A person you know well and like, and who is not usually a member of your family."
        },
        {
            "word": "hej",
            "translation": "hello",
            "meaning": "A greeting or expression used when meeting someone."
        },
        {
            "word": "tack",
            "translation": "thank you",
            "meaning": "A polite expression used when acknowledging a gift, service, or compliment."
        },
        {
            "word": "familj",
            "translation": "family",
            "meaning": "A group consisting of parents and their children, or all the descendants of a common ancestor."
        }
    ];
}

export function selectWords(words: any[], count: number) {
    let selectedWords = [];
    const arr = Array.from({ length: words.length }, (_, i) => i);
    let selectedIndexes = arr.sort(() => Math.random() - 0.5)
        .slice(0, count);
    for (let i = 0; i < selectedIndexes.length; i++) {
        selectedWords.push(words[selectedIndexes[i]]);
    }
    return selectedWords;
}

export async function delay(interval: number) {
    let result = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, interval);
    });
    return result;
}

export function createQuestions(words: any[]) {
    let questions = [];
    for (const word of words) {

        let resolveAnswer: any;
        const promise = new Promise<any>((resolve) => {
            resolveAnswer = resolve;
        });

        let question = {
            word: word.word,
            translation: word.translation,
            suggestions: createSuggestions(word, words),
            getAnswer: () => promise,
            answer: null,
            setAnswer: (value: any) => {
                resolveAnswer(value);
            }
        };
        questions.push(question);
    }
    return questions;
}

export function createSuggestions(word: any, words: any[]) {

    let wordsPool = words.filter((x) => x.word != word.word);
    let randomWords = selectWords(wordsPool, 3);
    let result = []
    for (const randomWord of randomWords) {
        result.push(randomWord.translation);
    }
    result.push(word.translation);
    return result.sort(() => Math.random() - 0.5);
}

export function collectResults(results: any[], quizTime: number) {
    let wrongAnswers = results.filter((x) => x.answer != x.translation);
    let rightAnswers = results.filter((x) => x.answer === x.translation);
    //localStorage.setItem("wrong-answers", JSON.stringify(wrongAnswers));
    addQuizTime(quizTime);
    increaseStatistic("wrong-answers-count", wrongAnswers.length);
    increaseStatistic("right-answers-count", rightAnswers.length);
}

function increaseStatistic(key: string, count: number) {
    //call api
}

function addQuizTime(quizTime: number) {
    let localStorageTimes = localStorage.getItem("quiz-times");
    if (localStorageTimes) {
        let times = JSON.parse(localStorageTimes);
        times.push(quizTime);
        //localStorage.setItem("quiz-times", JSON.stringify(times));
    } else {
        //localStorage.setItem("quiz-times", JSON.stringify([quizTime]));
    }
}