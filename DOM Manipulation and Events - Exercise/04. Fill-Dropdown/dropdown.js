function addItem() {
    let testInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    option.innerHTML = testInput.value;
    option.value = valueInput.value;

    menu.appendChild(option);
    testInput.value = '';
    valueInput.value = '';

}