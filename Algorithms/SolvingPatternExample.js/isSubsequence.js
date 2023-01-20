// Multiple Pointers - isSubsequence
// Write a function called  isSubsequence  which takes in two strings and checks whether the characters
//     in the first string form a subsequence of the characters in the second string.In other words, the
// function should check whether the characters in the first string appear
// somewhere in the second string, without their order changing.

// Sample Input:
// isSubsequence('hello', 'hello world')   //true
// isSubsequence('sing', 'sting ')   //true
// isSubsequence('abc', 'abracadabra')   //true
// isSubsequence('abc', 'acb')   //false

const isSubsequence = (str1, str2) => {
    let firstPointer = 0
    let secondPointer = 0

    while (firstPointer < str1.length) {
        if (secondPointer === str2.length) return false
        if (str1[firstPointer] === str2[secondPointer]) {
            firstPointer++
        }
        secondPointer++
    }
    return true
}

console.log(isSubsequence('abc', 'acb'));
