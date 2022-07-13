function doubleOddPosition(array) {
    let odd = [];
    for (let index = 1; index < array.length; index += 2) {
        let number = array[index];
        odd.push(number*2);
    }
    odd.reverse();
    return odd.join(' ');
}

console.log(doubleOddPosition([10, 15, 20, 25]));