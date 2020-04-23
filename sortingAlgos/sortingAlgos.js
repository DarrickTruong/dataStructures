// Built-in javascript sort, custom sorts 
let stringsArr = ["steele", "colt", "data structures", "algorithms"];
console.log( stringsArr.sort() );
// [ 'algorithms', 'colt', 'data structures', 'steele' ]

//  Sort by length of string
function sortByLength( str1, str2 ) {
    return str1.length - str2.length
}
console.log( stringsArr.sort( sortByLength ) );
// [ 'colt', 'steele', 'algorithms', 'data structures' ]

let intArr = [6, 4, 15, 10]
console.log( intArr.sort() );
// [ 10, 15, 4, 6 ]

// Sort nums low to high
function sortNumLowHigh( int1, int2 ) {
    return int1 - int2;
}
console.log( intArr.sort( sortNumLowHigh ) );


// Bubblesort
const bubbleSort = ( arr ) => {
    for ( let i = 0; i < arr.length - i; i++ ) {
        for ( let j = i; j < arr.length - i; j++ ) {
            if ( arr[j] > arr[j + 1] ) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log( bubbleSort( [100, 30, 35, 33, 40, 45] ) )

// with helper function
const swap = ( arr, idx1, idx2 ) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
const bubbleSort = ( arr ) => {
    for ( let i = 0; i < arr.length - i; i++ ) {
        for ( let j = 0; j < arr.length - 1 - i; j++ ) {
            console.log( arr, arr[j], arr[j + 1] );
            if ( arr[j] > arr[j + 1] ) {
                swap( arr, j, j + 1 )
            }
        }
        console.log( 'One pass complete!', arr )
    }
    return arr
}
console.log( bubbleSort( [100, 50, 30, 35, 33, 40, 45] ) )

// optimized bubblesort
const swap = ( arr, idx1, idx2 ) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
const bubbleSort = ( arr ) => {
    for ( let i = 0; i < arr.length - i; i++ ) {
        for ( let j = 0; j < arr.length - 1 - i; j++ ) {
            noSwaps = true;
            console.log( arr, arr[j], arr[j + 1] );
            if ( arr[j] > arr[j + 1] ) {
                swap( arr, j, j + 1 )
                noSwaps = false
            }
        }
        if ( noSwaps ) {
            break
        }
        console.log( 'One pass complete!', arr )
    }
    return arr
}
console.log( bubbleSort( [100, 30, 33, 35, 40, 45] ) )


// Selection Sort
const swap = ( arr, idx1, idx2 ) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
const selectionSort = ( arr ) => {
    for ( let i = 0; i < arr.length; i++ ) {
        let lowest = i;
        for ( let j = i + 1; j < arr.length; j++ ) {
            // console.log(arr[j],arr[lowest]);
            if ( arr[j] < arr[lowest] ) {
                lowest = j
            }
        }
        swap( arr, i, lowest )
        // console.log('one pass complete!', arr);
    }
    return arr
}
console.log( selectionSort( [100, 50, 30, 35, 70, 33, 40, 45] ) )

// selectionSort optimized
const swap = ( arr, idx1, idx2 ) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
const selectionSort = ( arr ) => {
    for ( let i = 0; i < arr.length; i++ ) {
        let lowest = i;
        for ( let j = i + 1; j < arr.length; j++ ) {
            noSwap = true;
            if ( arr[j] < arr[lowest] ) {
                lowest = j;
                noSwap = false;
            }
        }
        if ( noSwap ) {
            break
        }
        if ( lowest != i ) {
            swap( arr, i, lowest );
        }
    }
    return arr
}
console.log( selectionSort( [30, 33, 35, 40, 45, 100] ) )



// Insertion Sort

const insertionSort = ( arr ) => {
    const swap = ( arr, idx1, idx2 ) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for ( let i = 1; i < arr.length; i++ ) {
        currentVal = arr[i];
        for ( var j = i - 1; j >= 0 && arr[j] > currentVal; j-- ) {
            swap( arr, j + 1, j );
        }
        arr[j + 1] = currentVal;
    }
    return arr
}
console.log( insertionSort( [100, 50, 30, 35, 70, 33, 40, 45, 101] ) )



// Merge Sort

const mergeSort = ( arr ) => {
    const merge = ( arr1, arr2 ) => {
        let results = [];
        let i = 0, j = 0;
        while ( i < arr1.length && j < arr2.length ) {
            if ( arr1[i] < arr2[j] ) {
                results.push( arr1[i] );
                i++;
            } else if ( arr1[i] === arr2[j] ) {
                results.push( arr1[i] );
                i++;
                j++;
            } else {
                results.push( arr2[j] );
                j++
            }
        }
        while ( i < arr1.length ) {
            results.push( arr1[i] );
            i++;
        }
        while ( j < arr2.length ) {
            results.push( arr2[j] );
            j++;
        }
        // console.log(results);
        return results;
    }

    if ( arr.length <= 1 ) return arr;

    let mid = Math.floor( arr.length / 2 );
    // console.log('left ' + arr.slice(0, mid));
    // console.log('right ' + arr.slice(mid));
    let leftArr = arr.slice( 0, mid );
    let rightArr = arr.slice( mid );
    return merge( mergeSort( leftArr ), mergeSort( rightArr ) )

    // alternatively
    // let leftArr = mergeSort(arr.slice(0, mid));
    // let rightArr = mergeSort(arr.slice(mid));
    // return merge(leftArr, rightArr)


}

console.log( mergeSort( [1, 39, 10, 2, 4, 8, 5, 20, 15, 10] ) )


// Quick Sort

const quickSort = ( arr, left = 0, right = arr.length-1 ) => {
    const pivotHelper = ( arr, start = 0, end = arr.length-1 ) => {
        const swap = ( arr, idx1, idx2 ) => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
        }

        let swapIdx = start;
        let pivot = arr[start];
        // let swapInd = 0;
        for ( let i = start + 1; i <= end; i++ ) {
            if ( pivot > arr[i] ) {
                swapIdx++;
                swap( arr, swapIdx, i );
                console.log( arr );
            }
        }
        swap( arr, start, swapIdx );
        console.log( arr );
        return swapIdx;
    }

    if ( left < right ) {
        let pivotIdx = pivotHelper( arr, left, right );
        // left side
        quickSort( arr, left, pivotIdx - 1 );
        // right side
        quickSort( arr, pivotIdx + 1, right );
    }

    return arr
}
console.log( quickSort( [4, 8, 2, 1, 5, 7, 6, 3] ) )


