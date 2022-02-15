function isPalindrome(inputStr) {
    if (inputStr !== null)
    {
        return inputStr === inputStr.split('').reverse().join('');
    }
    return false;
}

module.exports = isPalindrome;