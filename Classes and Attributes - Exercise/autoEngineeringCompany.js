function solve(arr) {
    let listCars = {};
    for (const input of arr) {
        let info = input.split(' | ');
        let brand = info[0];
        let model = info[1];
        let producedCars = Number(info[2]);
        if (!listCars[brand] == true) {
            listCars[brand] = {};
        }
        if (!listCars[brand][model] == true) {
            listCars[brand][model] = 0;
        }
        listCars[brand][model] += producedCars;
    }
    console.log(Object.entries(listCars).map(([brand, model]) => {
        return brand + '\n'
            + Object.entries(model)
                .map(([model, quantity]) => `###${model} -> ${quantity}`)
                .join('\n')})
        .join('\n'));
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);