const insertSort = (arr) => {
    let j;
    for (let i = 1; i < arr.length; i++) {
        let selected = arr[i];
        for (j = i - 1; j >= 0; j--) {
            console.log(i, j, selected);
            if (selected < arr[j]) {
                arr[j + 1] = arr[j];
            }
            else {
                break;
            }
        }
        arr[j + 1] = selected;
    }
    return arr;
}

console.log(insertSort([1, 2, 6, 9, 5, 8, 7, 1]));