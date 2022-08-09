const selectionSort = (arr) => {
    let min = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j);
            if (arr[j] < arr[min]) {
                // keep track of the index that holds the minimum value
                min = j;
            }
        }
        if (min != i) {
            temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
};

console.log(selectionSort([6, 2, 1, 5, 8, 7, 1]));