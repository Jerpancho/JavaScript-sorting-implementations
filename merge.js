// this is an implementation of just merging two sorted array
// this is a sub-algorithm of the entire mergesort algorithm;

const merge = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;
    let newArr = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        console.log(p1, p2)
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

console.log(merge([2, 4, 6, 8, 12, 15, 51], [1, 3, 5, 7, 9, 11]));
