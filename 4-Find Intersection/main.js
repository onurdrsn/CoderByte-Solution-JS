function FindIntersection(strArr) {
    const set = new Set(strArr[0].split(','));

    for (let i = 1; i < strArr.length; i++) {
        const set2 = new Set(strArr[i].split(','));
        for (const value of set.values()) {
            if (!set2.has(value)) {
                set.delete(value);
            }
        }
    }
    return Array.from(set);
}

// keep this function call here
console.log(FindIntersection(readline()));
