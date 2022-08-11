function radixSort(arr) {
    let len = getMaxDigit(arr);

    for (let l = 0; l < len; l++) {
        // create an array for each number 0-9 and fill in the array with the numbers at the lth digit
        let bucket = [[], [], [], [], [], [], [], [], [], []];
        // for each element in the array, get the lth digit and place them in the corresponding bucket
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], l);
            bucket[digit].push(arr[i]);
        }
        // reset the array and place the it in the order of the bucket
        arr = [].concat(...bucket);
        // simplfied version of : 
        // for (let j = 0; j < bucket.length; j++) {
        //     arr = arr.concat(bucket[j]);
        // }
    }
    return arr;
}
// finds what the maximum digit length is in a array
function getMaxDigit(arr) {
    let maxCount = 0;
    for (let num of arr) {
        maxCount = Math.max(maxCount, digitLength(num));
    }
    return maxCount;
}
// gets the digit at the ith element
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// gets the digit length of the number
function digitLength(num) {
    return num.toString().length;
}

console.log(radixSort([132, 5, 452, 213, 52, 45, 15, 2453, 643245, 1, 1, 52, 632]));