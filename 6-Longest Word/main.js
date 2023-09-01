function LongestWord(sen) {
    const words = sen.split(" ");
    let longWord = words[0].replace(/[^a-zA-Z]/g, "");

    for (let i = 0; i < words.length; i++) {
        const onlyLetter = words[i].replace(/[^a-zA-Z]/g, "");
        if (onlyLetter.length > longWord.length) {
            longWord = onlyLetter;
        }
    }
    return longWord;
}

// keep this function call here 
console.log(LongestWord(readline()));
