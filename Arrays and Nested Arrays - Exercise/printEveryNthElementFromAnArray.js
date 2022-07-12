function printElement(array,step){
    let newArr = [];
    for (let i = 0; i < array.length; i=i+step) {
        const element = array[i];
        newArr.push(element);
    }
    return newArr;

}
console.log(printElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));