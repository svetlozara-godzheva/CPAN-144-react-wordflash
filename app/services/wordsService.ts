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