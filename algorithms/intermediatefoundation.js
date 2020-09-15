
function sigma(x){
    sum = 0;
    for (var i=1; i <= x; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(sigma(3));

//recursive
var sum = function(x){
    if ( x <= 1 ) {
        return 1;
    }
    else {
        return (x + sum(x-1));
    }
}
console.log(sum(3));   



function factorial(n){
    product = 0;
    for (var i = 1,; i <= x; i++){
        product = product * i;
    }
}
console.log(factorial(3));

//recursive
var factorial = function(x){
    if (x == 1){
        return 1;
    }
    else {
        return (x * factorial(x-1));
    }
}
console.log(factorial(5));



function fibonacci(n){
    if (n == 0) {
        return 0;
    }
    else if(n == 1) {
        return 1;
    }
    else {
        sum1 = fibonacci(n-1);
        sum2 = fibonacci(n-2);
        return sum1 + sum2;
    }
}
console.log(fibonacci(10));



function secondlast(x){
    if (x[x.length-2]==undefined){
        return null;
    }
    else {
        return x[x.length-2];
    }
}
console.log(secondlast([1,2,3,'liam',7]));



function nthtolast(x,n){
    if (x[x.length-n] == undefined){
        return null;
    }
    else {
        return x[x.length-n];
    }
}
console.log(nthtolast([5,2,3,6,4,9,7],3));



function secondlargest(){
    largest=0;
    second=0;
    for (var i = 0 ; i < x.length ; i++){
        if (x[i] > largest){
            largest = x[i];
        }
        else if (x[i] > second) {
            if (x[i] < largest) {
                second = x[i];
            }
        }
    }
    return second;
}
console.log(secondlargest([42,1,4,3.14,7]));


function doubletrouble(x){
    arr= [];
    for (var i = 0 ; i < x.length; i++){
        arr.push(x[i]);
        arr.push(x[i]);
    }
    return arr;
}
console.log(doubletrouble([4, "Ulysses", 42, false]));



function doubletrouble(arr){
    length = arr.length;
    for (var i = 0 ; i < length ; i++) {
        arr.push(arr[i]);
    }
    
    arr.push([]);
    console.log(arr);
  
    for (var count = 0 ; count < length ; count++) {
        arr[arr.length -1].push(arr[count]);
        console.log(arr);
    }
    

    for (var j = 0, w = 0 ; w < length ; j+=2, w++) {
        arr[j] = arr[arr.length - 1][w];
        arr[j+1] =arr[arr.length - 1][w];
        
    }
    arr.pop();
    return arr;
}

console.log(doubletrouble([4, "Ulysses", 42, false]));


function doubletrouble(x){
    length= x.length;
    for (var i = 0 ; i < length ; i ++){
        x.push(x[i]);
    }
    x.sort();
    return x;
}
console.log(doubletrouble([4, "Ulysses", 42, false]));
