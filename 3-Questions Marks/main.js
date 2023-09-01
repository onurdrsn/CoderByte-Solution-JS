const QuestionsMarks = s => {
  let l = null, a = 'false';
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      if (l !== null && parseInt(s[l], 10) + parseInt(s[i], 10) === 10) {
        if ((s.slice(l, i).match(/\?/g) || []).length === 3) {
          a = 'true';
        } else {
          return 'false';
        }
      } else {
        l = i;
      }
    }
  }
  return a;
};

// keep this function call here 
console.log(QuestionsMarks(readline()));