const inPlace = (S) => {
    const swap = (i, j) => {
        let temp = letterArr[j];
        letterArr[j] = letterArr[i];
        letterArr[i] = temp;
    }


    let letterArr = Array.from(S);
    console.log(letterArr);
    let front = 0, back = S.length - 1;
    let count = 0;
    
    while (front <= back && count < 100) {
        if (S[front].match('[a-zA-Z]') && S[back].match('[a-zA-Z]')) {
            // S[front,back] = S[back,front]
            swap(front, back);
            // S[front, back] = S[back, front];
            front++;
            back--;
        } else if (!S[front].match('[a-zA-Z]')) {
            front++;
        } else if (!S[back].match('[a-zA-Z]')) {
            back--;
        } else if (count == 99) {
            console.log("something went wrong");
        }
        count++;
        console.log(letterArr);
    }
    return letterArr.reduce((addToMe, runningVal) => addToMe + runningVal, "");
}
console.log(inPlace("ab-cd"), "  : dc-ba");