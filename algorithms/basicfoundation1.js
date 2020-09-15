function get1to255(x){
    for (var i=1; i<=x; i++){
        console.log(i);
    }
}
get1to255(255);


function geteven1000(x){
    for (var i=1; i <= x; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}
geteven1000(1000);


function sumodd5000(x){
    sum=0
    for(var i = 1; i <= x; i++){
        if (i % 2 != 0){
            sum = sum + i;
        }
    }
}
console.log(sumodd5000(5000));


function iteratearray(x){
    sum=0
    for(var i = 0 ; i < x.length ; i++){
        sum = sum + x[i];
    }
    return sum;
}

console.log(iteratearray(x));


function findmax(x){
    max = x[0];
    for (i = 1 ; i < x.length ; i++){
        if (x[i] > max){
            max = x[i];
        }
    }
    return max;
}

console.log(findmax([10,1,2,3,4,11]));
console.log(findmax([10,1,20,3,4,11]));



function findavgarray(x){
    sum=0
    for (var i = 0; i < x.length; i++){
        sum = sum + x[i];
    }
    avg = sum/x.length;
    return avg;
}

console.log(findavgarray([1,2,3,4,5,6,7,8]));


function arrayodd(x){
    arr = [];
    for (var i = 0 ; i <= x ; i++){
        if (i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(arrayodd(50));


function greaterthany(x,y){
    count = 0;
    for (var i = 0 ; i < x.length ; i++){
        if (x[i] > y){
            count= count + 1;
        }
    }
    return count;
}

console.log(greaterthany([1,2,3,4,5,6,],3));



function squares(x){
    for (var i = 0; i < x.length ; i++){
        x[i] = x[i]*x[1];
    }
    return x;
}

console.log(squares([-1,2,3,4,5,]));


function replaceneg(x){
    for (var i = 0 ; i < x.length ; i++){
        if (x[i] < 0){
            x[i] = 0;
        }
    }
    return x;
}

console.log(replaceneg([-1,2,-3,4,-5,6]));


function maxminavg(x){
    max = x[0];
    min = x[0];
    avg = x[0];
    for (var i = 1; i < x.length ; i++){
        if (x[i] > max){
            max = x[i];
        }
        if (x[i] < min){
            min = x[i];
        }
        avg = avg + x[i];
    }
    avg = avg/x.length;
    return [max, min, avg];
}

console.log(maxminavg([1,2,3,4,5,6]));


function swapvalues(x){
    for (var i = 0 ; i < x.length/2 ; i++){
        temp = x[i];
        x[i] = x[x.length - 1 - i];
        x[x.length - 1 - i] = temp;
    }
    return x;
}

console.log(swapvalues([-1,2,3,4,5,-6]));

function swapvalues(x){
    for (var i = 0 ; i < x.length - 1 - i ; i++){
        temp = x[i];
        x[i] = x[x.length - 1 - i];
        x[x.length - 1 - i] = temp;
    }
    return x;
}

console.log(swapvalues([-1,2,3,4,5,-6]));


function replacevalue(x){
    for (var i = 0; i < x.length ; i++){
        if (x[i] < 0){
            x[i] = 'Dojo';
        }
    }
    return x;
}

console.log(replacevalue([1,-1,2,-2,3,-3]));