function checkForMagic(matrix){
    let message = true;

    for (let index = 0; index < matrix.length - 1; index++) {
        let firstSum = matrix[index].reduce((a,b)=> a + b);
        let sumSecond = matrix[index+1].reduce((a,b)=> a + b);
        let sumColFirst = 0
        let sumColSecond = 0
        for (let j = 0; j < matrix.length ; j++) {
            sumColFirst+= matrix[index][j];
            sumColSecond+= matrix[index+1][j];
        }
        if(sumColFirst!= sumColSecond || firstSum!= sumSecond){
            message = false;
        }
        
    }
    return message;
}

console.log(checkForMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
   console.log(checkForMagic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]   
   ));