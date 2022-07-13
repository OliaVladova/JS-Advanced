function findPie(array, start, finish){
    let startIndex = array.indexOf(start);
    let finishIndex = array.indexOf(finish);
    let newArr = array.slice(startIndex, finishIndex +1);

    return newArr;
}

console.log(findPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));