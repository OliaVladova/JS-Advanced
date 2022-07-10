function calculator() {
    let firstSel = '';
    let secondSel = '';
    let resultSel = '';
    let returnedObj = {
        init(selector1, selector2, resultSelector) {
            firstSel = document.querySelector(selector1);
            secondSel = document.querySelector(selector2);
            resultSel = document.querySelector(resultSelector);
        },
        add: () =>{
            let res = Number(firstSel.value) + Number(secondSel.value);
            resultSel.value = res;
        },
        subtract: () =>{
            let res = Number(firstSel.value) - Number(secondSel.value);
            resultSel.value = res;
        }
    }


    return returnedObj;
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




