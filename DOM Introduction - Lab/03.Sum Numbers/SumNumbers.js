function calc() {
    let firstSum = document.getElementById('num1').value;
    let secondSum = document.getElementById('num2').value;
    let sum = Number(firstSum) + Number(secondSum);
    let sumShow = document.getElementById('sum');
    sumShow.value = sum;
}
