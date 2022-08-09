function quickSort(arr, start, end) {
    // What is base case?
    //  when left index matches the right index meaning we are at a single element?
    if (start >= end) {
        return;
    }

    // choose a pivot
    let pivot = arr[end];
    let pivotIndex = end;
    // partition the array according to pivot:
    // -- this means arrange every element lower than the pivot to the left of the pivot
    // and everything higher than the element to the right
    let startIndex = start;
    let endIndex = end;

    while (startIndex < endIndex) {
        while (arr[startIndex] <= pivot && startIndex < endIndex) {
            startIndex++;
        }
        while (arr[endIndex] >= pivot && startIndex < endIndex) {
            endIndex--;
        }
        // once you break out the loop, that means the current index of both should be swapped 
        // startIndex element is bigger than pivot which should be smaller
        // and endIndex element is smaller than pivot which should be bigger
        // TODO: swap
        let temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex] = temp;
    }
    // TODO: swap again to move the pivot where both indexes are at;
    let temp = arr[startIndex];
    arr[startIndex] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    console.log(arr);
    // recursively call the quickSort to arrange all elements
    quickSort(arr, start, startIndex - 1);
    quickSort(arr, endIndex + 1, end);
    return arr;
}

let sort = [12, 2, 43, 5, 1, 8, 64, 32, 25];

console.log(quickSort(sort, 0, sort.length - 1));