function getBiggerNumbers(array) {
    let newArr = [];
    array.sort((a, b) => a - b);
    let length = Math.floor(array.length / 2);
    for (let index = length; index < array.length; index++) {
        const element = array[index];
        newArr.push(element);
    }
    return newArr;
}

console.log(getBiggerNumbers([3, 19, 14, 7, 2, 19, 6]));