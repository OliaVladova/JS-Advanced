function findBiggestElement(matrix) {
    let biggest =-9999999999;
    for (let index = 0; index < matrix.length; index++) {
        for (let j = 0; j < matrix[index].length; j++) {
            let element = matrix[index][j];
            if (element > biggest) {
                biggest = element;
            }
        }
    }
    return biggest;
}

console.log(findBiggestElement([[20, 50, 10],
[8, 33, 145]]
));

console.log(findBiggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));