window.addEventListener('load', solve);

function solve() {
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');

    const addButton = document.getElementById('add');
    const furnitureList = document.getElementById('furniture-list');
    const totalProfit = document.querySelector('.total-price');
    addButton.addEventListener('click', addItem);

    function addItem(e) {
        e.preventDefault();
        const model = modelInput.value;
        const year = Number(yearInput.value);
        const description = descriptionInput.value;
        const price = Number(priceInput.value);
        if (!model || !description || !yearInput.value || !priceInput.value) {
            return;
        }
        if (year <= 0 || price <= 0) {
            return;
        }
        const tr = document.createElement('tr');
        tr.classList.add('info');

        const nameFurniture = document.createElement('td');
        nameFurniture.textContent = model;

        const priceTd = document.createElement('td');
        priceTd.textContent = price.toFixed(2);

        tr.appendChild(nameFurniture);
        tr.appendChild(priceTd);

        const moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';

        const trHide = document.createElement('tr');
        trHide.classList.add('hide');
        const tdYear = document.createElement('td');
        const tdDescription = document.createElement('td');

        moreBtn.addEventListener('click', showMore);
        function showMore(event) {
            if (event.target.textContent === 'More Info') {
                trHide.style.display = 'contents';
                event.target.textContent = 'Less Info';
            } else {
                trHide.style.display = 'none';
                event.target.textContent = 'More Info';
            }
        };

        tdYear.textContent = `Year: ${year}`;
        tdDescription.setAttribute('colspan', 3);
        tdDescription.textContent = `Description: ${description}`;

        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', buy);
        function buy() {

            let profit = Number(totalProfit.textContent);
            profit += price;
            totalProfit.textContent = profit.toFixed(2);
            furnitureList.removeChild(tr);
            furnitureList.removeChild(trHide);

        }


        const buttons = document.createElement('td');
        buttons.appendChild(moreBtn);
        buttons.appendChild(buyBtn);


        tr.appendChild(buttons);

        furnitureList.appendChild(tr);
        furnitureList.appendChild(trHide);

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }
}
