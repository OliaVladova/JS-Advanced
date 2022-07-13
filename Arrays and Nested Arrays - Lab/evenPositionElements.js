function findEvenElements(array) {
    let message = '';
    for (let index = 0; index < array.length; index++) {
        if (index % 2 == 0) {
            message += array[index] + ' ';
        }

    }
    console.log(message);
}

findEvenElements(['20', '30', '40', '50', '60']);