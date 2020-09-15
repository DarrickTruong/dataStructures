/**
 * DARRICK 
 * MISSING POSITIVE
 * 
 * 
 * 
 */
function missingPos(arr){
    if(arr.length===0) return 1;
    let pos = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>0){
            pos.push(arr[i]);
        }
    }
    if(pos.length===0) return 1;
    console.log(`pos online 15 ${pos}`);
    let min = arr[0], max = min;
    for(let i = 1; i<arr.length;i++) {
        if(pos[i]<min){
            min = pos[i];
        }
        if(pos[i]>max) max = pos[i];
    }
    if(min === 1) {
        console.log("inside if")
        for(let i = min; i<= max; i++){
            if(!(pos.includes(i))) {
                return i
            }
        } 
        return max+1;
    } else {
        console.log("inside else")
        return 1
    }
}

let ex1 = [1, 2, 0]; //3:
let ex2 = [3, 4, -1, 1]; //2
let ex3 = [7, 8, 9, 11, 12] // 1
let ex4 = [-7, -9, -11, 12] // 1

console.log(missingPos(ex1));
console.log();
console.log(missingPos(ex2));
console.log();
console.log(missingPos(ex4));
console.log();
console.log(missingPos([0,1,2,3,5,-55,-88,-97,-1,4]));