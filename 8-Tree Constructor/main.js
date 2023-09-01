function TreeConstructor(strArr) {
    const childCount = {};
    const parentCount = {};

    for (const pair of strArr) {
        const [child, parent] = pair.slice(1, -1).split(',').map(Number);
        childCount[child] = (childCount[child] || 0) + 1;
        parentCount[parent] = (parentCount[parent] || 0) + 1;
        if (parentCount[parent] > 2)
            return false;
    }

    return Object.values(childCount).every(count => count <= 1) &&
        Object.values(parentCount).every(count => count <= 2);
}

// keep this function call here 
console.log(TreeConstructor(readline()));
