let dictionary = {
    "a":1
}

console.log(dictionary['a']++)

let string = "A.B,C;D'E[F]G\1=2-3";

for (let char of string){
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
    console.log(char)

    }
}