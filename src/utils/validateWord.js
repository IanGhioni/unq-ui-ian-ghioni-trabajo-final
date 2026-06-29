import { existsWord } from "../service/apiValidate";

export async function validateWord(word, lastWord, words) {
    const exists = await existsWord(word) 
    if (!exists) {
        return {
            valid: false,
            message: "¡ La palabra no existe !"
        }
    }

    if (lastWord !== '') {
        const lastLetter = lastWord.slice(-1).toLowerCase();
        const firstLetter = word.charAt(0).toLowerCase();

        if (firstLetter !== lastLetter) {
            return {
                valid: false,
                message: `¡ La palabra debe comenzar con "${lastLetter.toUpperCase()}" !`
            };
        }
    }

    if (words.includes(word)) {
        return {
            valid: false,
            message: "¡ Esa palabra ya fue utilizada !"
        };
    }

    return {
        valid: true,
        message: ""
    };
}