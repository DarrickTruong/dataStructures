
console.log('3', (3).toString(2));
console.log('10', (10).toString(2));
console.log('5', (5).toString(2));
console.log('25', (25).toString(2));
console.log('2', (2).toString(2));
console.log('8', (8).toString(2));


const findMaximumXOR = (arr) => {
    let map = new Map();
    for (let i=0; i<arr.length; i++) {
        map.set(arr[i], (arr[i]).toString(2));
    }
    console.log('map we just created', map);
}

findMaximumXOR([3, 10, 5, 25, 2, 8])