function findTwoSmallest(array){
array.sort((a, b) => a - b);
let message = array[0] + ' ' + array[1];
console.log(message);
}

findTwoSmallest([30, 15, 50, 5]);