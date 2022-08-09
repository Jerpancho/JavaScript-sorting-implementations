// optimization: break the loop once no swaps are made
const bubbleSort = (arr) => {
    let temp;
    let noSwap = true;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([6, 2, 1, 5, 8, 7, 1]));