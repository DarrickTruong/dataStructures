
function print1To255() {
    for ( let i = 1; i <=255; i++) {
        console.log(i);
    }
}
print1To255()

function oddNumbers() {
    let i = 1;
    while (i<=999) {
        console.log(i);
        i+=2
    }
}
oddNumbers()

function printSum() {
    let sum = 0;
    let i = 1;
    while (i <= 1000) {
        sum += i;
        i++;
    }
    console.log(sum);
}
printSum()

function iterateArr(arr) {
    for (let i =0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
iterateArr([1,3,5,7,9])

function findMax(arr) {
    let max = 0
    for (let key in arr) {
        console.log( 'this is key ', key);
        if (arr[key] > max) {
            max = arr[key]
        }
    }
    console.log(max)
}
findMax([1,3,5,7,9])

function findAvg(arr) {
    let sum = 0
    for (let key in arr) {
        sum += arr[key];
    }
    console.log(sum/arr.length)
}
findAvg([1,3,5,7,9])

function arrayWithOdds() {
    let y = [];
    for (let i = 0 ; i <= 255; i++) {
        if (i % 2 !=0) {
            y.push(i);
        }
    }
    console.log(y)
}
arrayWithOdds()

function greaterThanY(arr, y) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    console.log(count);
}
greaterThanY([1,2,3,4,5], 2)

function squareValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}
squareValues([1,2,3])

function squareValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
    }
    console.log(arr);
}
squareValues([1,2,3])

function replaceNegs(arr) {
    for (let key in arr) {
        if (arr[key] < 0) {
            arr[key] = 0; 
        }
    }
    console.log(arr);
}
replaceNegs([1,2,3,-1,-2,-3])

function maxMinAvg(arr) {
    let min =0;
    let max =0;
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        else if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    console.log('avg is ', sum/arr.length, ' min is ', min, ' max is ', max);
}
maxMinAvg([1,2,3,4,5])

// shift values one to front one position
function shiftValues(arr) {
    for ( let i = 0 ; i < arr.length ; i++) {
        console.log('index is ', i);
        if ( i === 0 ) {
        }
        else if (  i === arr.length-1 ) {
            console.log('index is ', i)
            arr[arr.length-1] = 0;
        } 
        else {
            arr[i-1] = arr[i]
        }
    }
    console.log(arr);
}
shiftValues([1,2,3,4,5,6,7,8,9])

function numberToString(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Negative';
        }
    }
    console.log(arr)
}
numberToString([-1,1,-1])

function randomArray() {
    let newArr = [];
    for (let i = 0 ; i < 10; i++) {
        let random = Math.random() * 50;
        newArr.push(Math.round(random));
    }
    console.log(newArr);
}
randomArray()

function swappingValues(arr) {
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr);
}
swappingValues([1,2,2,2,3])

function reverseArray(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    console.log(arr);
}
reverseArray([1,2,3])
reverseArray([1,2,3,4])

function insertXinY(arr, x, y) {
    if (y > arr.length) {
        console.log('y outside of arr');
        arr.push(x);
    }
    else if (y < 0) {
        console.log('choose positive Y');
    }
    else {
        let i = arr.length-1;
        while (i >= y) {
            arr[i+1] = arr[i];
            i--;
        }
        arr[y] = x;
    }
    console.log(arr)
}
insertXinY([1,2,3,4,5], 100, 6)

function popNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] < 0 ) {
            arr.splice(i,1);
        }
    }
    console.log(arr);
}
popNegatives([0,-1,2,-3,4])

function popNegatives(arr) {
    let count=0;
    for( let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            count++;
        } else { 
            arr[i-count] = arr[i];
        }
    }
    while (count--){
        console.log(count);
        arr.pop();
    }
    console.log(arr);
}
popNegatives([0,-1,2,-3,4])