function MinWindowSubstring(strArr) {
  const [N, K] = strArr;
  const charCount = new Map();
  let left = 0, minWindow = "";

  for (const char of K) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  let requiredChars = charCount.size;

  for (let right = 0; right < N.length; right++) {
    const rightChar = N[right];
    if (charCount.has(rightChar)) {
      charCount.set(rightChar, charCount.get(rightChar) - 1);
      if (charCount.get(rightChar) === 0) {
        requiredChars--;
      }
    }

    while (requiredChars === 0) {
      if (!minWindow || right - left + 1 < minWindow.length) {
        minWindow = N.substring(left, right + 1);
      }

      const leftChar = N[left];
      if (charCount.has(leftChar)) {
        charCount.set(leftChar, charCount.get(leftChar) + 1);
        if (charCount.get(leftChar) > 0) {
          requiredChars++;
        }
      }
      left++;
    }
  }
  return minWindow;
}

// keep this function call here 
console.log(MinWindowSubstring(readline()));
