function CodelandUsernameValidation(str) {
    if (str.length >= 4 && str.length <= 25) {
        if (/[A-Za-z]/.test(str[0])) {
            if (/^[A-Za-z0-9!@#$%^&*()\-_=+;:'",.<>?/]+$/.test(str)) {
                return true;
            }
        }
    }
    return false;
}

// keep this function call here 
console.log(CodelandUsernameValidation(readline()));
