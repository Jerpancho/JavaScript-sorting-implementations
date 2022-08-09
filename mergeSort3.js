function mergeSort(arr, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        mergeSort(arr, l, mid)
        mergeSort(arr, mid + 1, r);
        merge(arr, l, mid, r);
    }

}

function merge(arr, l, mid, r) {
    // +1 because of zero indexing
    // or because of the case of empty arrays?
    let s1 = mid - l + 1;
    let s2 = r - mid;
    
    let left = new Array(s1);
    let right = new Array(s2);

    for (let i = 0; i < s1; i++) {
        left[i] = arr[i + l];
    }
    for (let j = 0; j < s2; j++) {
        right[j] = arr[j + mid + 1];
    }
    console.log(left, right);
    let i = 0;
    let j = 0;
    let k = l;

    while (i < s1 && j < s2) {
        if (left[i] < right[j]) {
            arr[k] = left[i];
            i++;
        }
        else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    while (i < s1) {
        arr[k] = left[i];
        i++;
        k++;

    }
    while (j < s2) {
        arr[k] = right[j];
        j++;
        k++;

    }
}

let sort = [5, 2, 43, 12, 13, 8, 64, 32, 1];
console.log("before sort: ", sort);
mergeSort(sort, 0, sort.length - 1);
console.log("after sort: ", sort);