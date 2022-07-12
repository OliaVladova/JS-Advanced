function rotate(array,rotations){
    let newArr = array;
for (let index = 0; index < rotations; index++) {
    array.unshift(array.pop());
}
console.log(array.join(' '));
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);
/*rotate(['1', 
'2', 
'3', 
'4'], 
2
);*/