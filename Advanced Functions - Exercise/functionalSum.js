function add(num) {
    let sum = num;

    function addToSum(num2) {
        sum += num2;
        return addToSum;
    }
    addToSum.toString = function () {
        return sum;
    };
    return addToSum;
}
console.log(add(1));
console.log(add(1)(6)(-3));