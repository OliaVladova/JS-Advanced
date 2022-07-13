function rearenge(array){
    let newArr = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element>=0){
            newArr.push(element);
        }else{
            newArr.unshift(element);
        }
    }
console.log(newArr.join('\n'));
}

rearenge([7, -2, 8, 9]);
rearenge([3, -2, 0, -1]);