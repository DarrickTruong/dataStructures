function biggiesize(x){
    for (var i = 0 ; i < x.length ; i++){
        if (x[i] > 0){
            x[i] = 'big';
        }
    }
    return x;
}

console.log(biggiesize([1,-1,2,-2,3,-3]));


function printlowreturnhigh(x){
    min = 0;
    max = 0; 
    for (var i = 0 ; i < x.length ; i++){
        if (x[i] > max){
            max = x[i];
        }
        if (x[i] < min){
            min = x[i];
        }
    }
    console.log(min);
    return max;
}

console.log(printlowreturnhigh([0,1,2,3,4,5]));


function printonereturnanother(x){
    console.log(x[x.length-2]);
    for (var i = 0 ; i < x.length ; i++) {
        if (x[i] < 0) {
            return x[i];
        }
    }
}

console.log(printonereturnanother([1,2,3,4,5,8,10,11,-12]));
console.log(printonereturnanother([1,2,-33,4,5,8,10,11,-12]));


function doublevision(x){
    arr = [];
    for(var i = 0; i < x.length ; i++){
        arr.push(x[i]*2);
    }
    return arr;
}

console.log(doublevision([1,2,3]));


function countpositives(){
    count = 0
    for(var i = 0 ; i < x.length ; i++){
        if (x[i] > 0) {
            count = count + 1;
        }
    }
    return x[x.length - 1] = count;
}

console.log(countpositives([-1,-1,-1,2,3,4]));



function evensandodds(x){
    for (var i=0 ; i < x.length ; i++){
        if (x[i] % 2 != 0){
            if (x[i+1] % 2 != 0){
                if (x[i + 2] % 2 != 0){
                    console.log("That's odd!");
                    i+=3;
                    
                }
            }
        }
        if (x[i] % 2 == 0){
            if (x[i+1] % 2 == 0){
                if (x[i+2] % 2 ==0){
                    console.log("Even more so!");
                    i+= 3; 
                }
            }
        }
      console.log(i);
    }
}

evensandodds([0,1,1,1,2,2,3,3,3,4,4,4]);



function incrementseconds(x){
    for (var i=0 ; i < x.length ; i++){
        if (i % 2 !=0){
            x[i] = x[i] + 1;
        }
    }
    return x;
}

console.log(incrementseconds([1,2,3,4,5,6]))



function previouslengths(x){
    for (var i = 0 ; i < x.length -1 ; i++){
    n = x[x.length-2-i].length;
    x[x.length - 1 - i] = n;
    }
    return x;
}
console.log(previouslengths(['dojo', 'hawaii', 'four', 'three']));



function addseven(x){
    arr=[];
    for (var i = 0 ; i < x.length ; i++) {
        arr.push(x[i]+7);
    }
    return arr;
}

console.log(addseven([8,9,10]));



function reversearray(x){
    for (var i = 0 ; i < x.length/2 ; i++){
        temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }
    return x;
}

console.log(reversearray([1,2,3,4,-5,-6]))



function negativeoutlook(x){
    arr = [];
    for (var i = 0; i < x.length ; i++){
        if (x[i] < 0) {
            arr.push(x[i]);
        }
        if (x[i] > 0) {
            arr.push(x[i]*-1);
        }
    }
    return arr;
}

console.log(negativeoutlook([1,-1,2,-2,3,-3]))



function alwayshungry(x){
    count = 0;
    for (var i = 0 ; i < x.length ; i++){
        if (x[i] == "food"){
            console.log("yummy");
            count+=1;
        }
    }
    if (count ==0){
        console.log("i'm hungry!")
    }
}
alwayshungry(['one', 'two', 'food']);
alwayshungry(['one', 'two'])





function swaptocenter(x){
    for(var i = 0 ; i < x.length/2; i+=2){
        temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }    
    return x;
}

console.log(swaptocenter([1,2,3,4,5,6,7,8]));



function scalearray(arr,num){
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*num;
    }
    return arr;
}

console.log(scalearray([1,2,3,4,5,6,7,8,9,10],2));