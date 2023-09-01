//Three Ways Reverse String
function FirstReverse(str) {
  /* 1. Way Manuel
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return (reversed);
  */
  //2. Way Reverse 
  if (str === "") {
    return "";
  }
  return (FirstReverse(str.substr(1)) + str.charAt(0));
  //3. Way Split-Reverse-Join
  //return str.split("").reverse().join("");
}

// keep this function call here 
console.log(FirstReverse(readline()));