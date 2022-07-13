function sumDiagonals(array) {
    let message = '';
    let firstSum = 0;
    let secondSum = 0;

    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array[index].length; j++) {
            let element = array[index][j];
            if (index == j) {
                firstSum += element;
            }
            if (j == (array[index].length -1 - index)) {
                secondSum += element;
            }
        }
    }
    console.log(firstSum + ' ' + secondSum);
}

sumDiagonals([[20, 40],
    [10, 60]]
   );
