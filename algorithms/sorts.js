function bubbleSort(array) {
    let k = 0
    sorted = false
    if (sorted == false) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
                k++;
                // console.log(k, array);
            }
        }
    }
    return array;
}
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))

function betterBubble(array) {
    let count = 0;
    do {
        var swapping = false;
        for (let i = 0; i < array.length - 1 - count; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
                swapping = true;
            }
        }
        count++
    } while (swapping === true) {
        return array;
    }
}
console.log(betterBubble([9, 8, 7, 6, 5, 4, 3, 2, 1]))


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        element = array[i];
        let j = i
        while (j > 0 && array[j - 1] > element) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = element;
    }
    return array;
}
console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))


function merge(left, right) {
    leftIndex = 0;
    rightIndex = 0;
    mergedArray = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex])
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex])
            rightIndex++;
        }
    }
    return mergedArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}
function mergeSort(array) {
    if (array.length <= 1) {
        return array
    } else {
        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);
        return merge(mergeSort(left), mergeSort(right))
    }
}
arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(mergeSort(arr))


function quickSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        const pivot = array[0];
        const left = [];
        const right = [];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return quickSort(left).concat(pivot).concat(quickSort(right))
    }
}
arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(quickSort(arr))