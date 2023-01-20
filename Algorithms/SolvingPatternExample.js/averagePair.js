/*Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average,
 determine if there is a pair of values in the array where the average of the pair equals 
 the target average. There may be more than one pair that matches the average target.
 Sample Input:
 averagePair([1,2,3],2.5)   //true
 averagePair([1,3,3,5,6,7,10,12,19],8)//true
 averagePair([-1,0,3,4,5,6],4.1)  //false
 averagePair([],4)  //false*/

const averagePair = (array, target) => {
    let firstPointer = 0;
    let secondPointer = firstPointer + 1;
    if (!(array.length)) return false
    while (firstPointer < array.length) {
        let firstElement = array[firstPointer];
        let secondElement = array[secondPointer];
        if (firstElement + secondElement / 2 === target) return true
        if (secondPointer === array.length - 1) {
            firstPointer++
            secondPointer = firstPointer
        }
        if (firstPointer === array.length - 1) {
            return false;
        }
        secondPointer++
    } return false;
};


const validAveragePair = (array, target) => {
    let firstPointer = 0;
    let secondPointer = array.length - 1;
    while (secondPointer > firstPointer) {
        let average = (array[firstPointer] + array[secondPointer]) / 2
        console.log('firstPointer', firstPointer);
        console.log('arrayfirstPointer', array[firstPointer]);
        console.log('secondPointer', secondPointer);
        console.log('arraysecondPointer', array[secondPointer]);
        if (average === target) return true
        else if (average < target) firstPointer++
        else secondPointer--
    }
    return false;
}

// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(validAveragePair([-1, 0, 3, 4, 5, 6], 8));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
