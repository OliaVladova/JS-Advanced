function solve() {
  let textarea = document.querySelectorAll('textarea');
  let buttons = Array.from(document.querySelectorAll('button'));
  let table = document.querySelector('tbody');
  let genereteBtn = buttons[0];
  genereteBtn.type = 'button';
  genereteBtn.addEventListener('click', generete);

  function generete() {
    let arr = JSON.parse(textarea[0].value);
    for (const obj of arr) {
      let tr = document.createElement('tr');
      let tdPic = document.createElement('td');
      let img = document.createElement('img');
      img.src = obj.img;
      tdPic.appendChild(img);
      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = obj.name;
      tdName.appendChild(pName);
      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = obj.price;
      tdPrice.appendChild(pPrice);
      let tdFactor = document.createElement('td');
      let pFactor = document.createElement('p');
      pFactor.textContent = obj.decFactor;
      tdFactor.appendChild(pFactor);
      let tdCheckBox = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      tdCheckBox.appendChild(input);
      tr.appendChild(tdPic);
      tr.appendChild(tdName);
      tr.appendChild(tdPrice);
      tr.appendChild(tdFactor);
      tr.appendChild(tdCheckBox);
      table.appendChild(tr);
    }

  }
  let buyBtn = buttons[1];
  buyBtn.type = 'button';
  buyBtn.addEventListener('click', buy);

  function buy() {
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter(el => el.checked);
    let boughtFurniture = [];
    let totalPrice = 0;
    let avgFactor = 0;
    for (const box of checkboxes) {
      let parent = box.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll('p'));
      boughtFurniture.push(data[0].textContent);
      totalPrice += Number(data[1].textContent);
      avgFactor += Number(data[2].textContent);
    }

    let result = textarea[1];
    result.textContent += `Bought furniture: ${boughtFurniture.join(', ')}\r\n`;
    result.textContent += `Total price: ${totalPrice.toFixed(2)}\r\n`;
    result.textContent += `Average decoration factor: ${avgFactor / checkboxes.length}`;

  }

}