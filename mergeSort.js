// this mergesort variation returns a new array that is sorted
const mergeSort = (arr) => {
    // find the base case
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);

    // this can be simplified with a slice instead;
    let l = []; //or let l = new Array(middle);
    for (let i = 0; i < middle; i++) {
        l.push(arr[i]);
    }
    let r = []; // or let l = new Array(arr.length - middle);
    for (let j = middle; j < arr.length; j++) {
        r.push(arr[j]);
    }

    // divide the left side of the array
    let left = mergeSort(l);
    // divide the right side of the array
    let right = mergeSort(r);

    return merge(left, right);
}

const merge = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;
    let newArr = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            newArr.push(arr1[p1]);
            p1++;
        }
        else {
            newArr.push(arr2[p2]);
            p2++;
        }
    }
    while (p1 < arr1.length) {
        newArr.push(arr1[p1]);
        p1++;
    }
    while (p2 < arr2.length) {
        newArr.push(arr2[p2]);
        p2++;
    }
    return newArr;
}

console.log(mergeSort([5, 2, 7, 12, 8, 13, 64, 23, 74, 1]));
