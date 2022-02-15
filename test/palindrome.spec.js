const isPalindrome = require('../palindromeChecker')

describe("palindrome tests", function() {
    
    it ("when empty returns true", function() {
        //input
        const input = "";
        //expected
        const expected = true;
        //actual
        const actual = isPalindrome(input);
        //assert
        expect(actual).toBe(expected);
    })
    it ("when wow returns true", function() {
        //input
        const input = "wow";
        //expected
        const expected = true;
        //actual
        const actual = isPalindrome(input);
        //assert
        expect(actual).toBe(expected);
    })

    it ("when adfadf returns false", function() {
        //input
        const input = "adfadf";
        //expected
        const expected = false;
        //actual
        const actual = isPalindrome(input);
        //assert
        expect(actual).toBe(expected);
    })

    it ("when null returns false", function() {
        //input
        const input = null;
        //expected
        const expected = false;
        //actual
        const actual = isPalindrome(input);
        //assert
        expect(actual).toBe(expected);
    })
})