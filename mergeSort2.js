// this mergesort variation directly changes the array that was passed and sorts it ;
function mergeSort(arr) {
    if (arr.length <= 1) {
        return;
    }
    let mid = Math.floor(arr.length / 2);
    let left = new Array(mid);
    let right = new Array(arr.length - mid);

    for (let i = 0; i < mid; i++) {
        left[i] = arr[i];
    }
    for (let j = 0; j < arr.length - mid; j++) {
        right[j] = arr[j + mid];
    }
    mergeSort(left);
    mergeSort(right);

    merge(arr, left, right);
}

function merge(a, l, r) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            a[k] = l[i];
            i++;
        }
        else {
            a[k] = r[j];
            j++;
        }
        k++;
    }
    while (i < l.length) {
        a[k] = l[i];
        i++;
        k++;
    }
    while (j < r.length) {
        a[k] = r[j];
        j++;
        k++
    }
    console.log('after merging:')
    console.log(a);
}
let sort = [5, 2, 43, 12, 13, 8, 64, 32, 1];
// console.log("before sort: ", sort);
mergeSort(sort);
// console.log("after sort: ", sort);