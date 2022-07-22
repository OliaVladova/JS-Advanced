function addItem() {
    let toAdd = document.getElementById('newItemText').value;
    let newItem = document.createElement('li');
    newItem.innerHTML = toAdd;
    document.getElementById('items').appendChild(newItem);
}