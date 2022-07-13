function sum(array) {
    let sum = 0;
    let first = Number(array.shift());
    let last = Number(array.pop());
    sum = first + last;
    return sum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));