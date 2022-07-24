class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        } else {
            let car = {
                model,
                horsepower,
                price,
                mileage
            };

            this.availableCars.push(car);
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }

    }
    sellCar(model, desiredMileage) {
        let isFound = false;
        let price = 0;
        for (let i = 0; i < this.availableCars.length; i++) {
            let car = this.availableCars[i];
            if (car.model === model) {
                isFound = true;
                if (car.mileage <= desiredMileage) {
                    price = car.price;
                } else {
                    let mileageDiff = car.mileage - desiredMileage;
                    if (mileageDiff <= 40000) {
                        price = car.price * 0.95;
                    } else {
                        price = car.price * 0.9;
                    }
                }
                let sold ={
                  model : car.model,
                  horsepower: car.horsepower,
                  soldPrice : price
                }
                this.soldCars.push(sold);
                this.availableCars.splice(i, 1);
                this.totalIncome += price;
                break;
            }

        }

        if (!isFound) {
            throw new Error(`${model} was not found!`)
        } else {
            return `${model} was sold for ${price.toFixed(2)}$`;
        }
    }
    currentCar() {
        if (this.availableCars.length == 0) {
            return `There are no available cars`;
        } else {
            let result = [];

            result.push('-Available cars:');
            this.availableCars.forEach(car =>
                result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));

            return result.join('\n');
        }
    }
    salesReport(criteria) {
        if (criteria === 'horsepower' ){
            this.soldCars.sort((car1, car2) => car2.horsepower - car1.horsepower);
        } else if(criteria === 'model'){
            this.soldCars.sort((car1, car2) => car1.model.localeCompare(car2.model));

        }else{
            throw new Error('Invalid criteria!');
        }
        let report = [];

        report.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        report.push(`-${this.soldCars.length} cars sold:`);

        this.soldCars.forEach(car => report.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));

        return report.join('\n');
    }

}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));


/*assert.equal(dealership.salesReport('horsepower'), 
`-SoftAuto has a total income of 29600.00$
-2 cars sold:
---Mercedes C63 - 300 HP - 26100.00$
---Toyota Corolla - 100 HP - 3500.00$`);*/



