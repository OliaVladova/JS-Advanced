function reduceElements(array) {
    let initialValue = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < array.length ; index++) {
        const element = array[index];
       if(max<=element){
           initialValue.push(element);
           max= element;
       }

    }

    return initialValue;

}

console.log(reduceElements([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));