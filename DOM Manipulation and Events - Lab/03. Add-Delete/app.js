function addItem() {
    let toAdd = document.getElementById('newItemText').value;
    console.log(toAdd);
    let newItem = document.createElement('li');
    newItem.textContent = toAdd;
    let deleteBtn = document.createElement('a');
    deleteBtn.href = "#";
    deleteBtn.textContent = '[Delete]';

    newItem.appendChild(deleteBtn);
    document.getElementById('items').appendChild(newItem);
    deleteBtn.addEventListener('click', deleteFunc);

    function deleteFunc(event) {
        event.target.parentElement.remove();
    }

}