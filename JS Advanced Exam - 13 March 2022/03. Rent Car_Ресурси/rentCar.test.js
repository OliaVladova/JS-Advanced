let rentCar = require('./03. Rent Car_Ресурси/rentCar.js');
const { assert, expect } = require('chai');

describe('Rent a Car', () => {
    describe('searchCar test', () => {
        it('inavid array input test', () => {
            expect(() => rentCar.searchCar('str', 'Opel')).to.throw('Invalid input!');
        });
        it('inavid model input test', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1)).to.throw('Invalid input!');
        });
        it('not present models test', () => {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Opel")).to.throw('There are no such models in the catalog!');
        });

        it('present models test', () => {
            const expected = 'There is 2 car of model Audi in the catalog!';
            const returned = rentCar.searchCar(["Volkswagen", "BMW", "Audi","Audi"], "Audi");
            assert.equal(expected, returned);
        });
        
    });
    describe('calculatePriceOfCar test', () => {
        it('invalid models test', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 5)).to.throw('Invalid input!');
        });
        it('invalid number test', () => {
            expect(() => rentCar.calculatePriceOfCar("Audi", "")).to.throw('Invalid input!');
        });
        it('invalid model car test', () => {
            expect(() => rentCar.calculatePriceOfCar("Opel", 10)).to.throw('No such model in the catalog!');
        });
        it('valid model car test', () => {
            const expected = 'You choose BMW and it will cost $450!'
            const returned = rentCar.calculatePriceOfCar("BMW", 10);
            assert.equal(expected, returned);
        });
    })
    describe('checkBudget test', () => {
        it('invalid costPerDay test', () => {
            expect(() => rentCar.checkBudget("", 10, 50)).to.throw('Invalid input!');
        });
        it('invalid costPerDay and days test', () => {
            expect(() => rentCar.checkBudget("", "", 50)).to.throw('Invalid input!');
        });
        it('invalid costPerDay and budget test', () => {
            expect(() => rentCar.checkBudget("", 10, "")).to.throw('Invalid input!');
        });
        it('invalid days and budget test', () => {
            expect(() => rentCar.checkBudget(5, "", "")).to.throw('Invalid input!');
        });
        it('invalid input test', () => {
            expect(() => rentCar.checkBudget("", "", "")).to.throw('Invalid input!');
        });
        it('invalid days test', () => {
            expect(() => rentCar.checkBudget(15, "", 50)).to.throw('Invalid input!');
        });
        it('invalid budget test', () => {
            expect(() => rentCar.checkBudget(15, 50, "")).to.throw('Invalid input!');
        });
        it('low budget test', () => {
            const expected = 'You need a bigger budget!';
            const returned = rentCar.checkBudget(10, 10, 50);
            assert.equal(expected, returned);
        });
        it('successful rent test', () => {
            const expected = 'You rent a car!';
            const returned = rentCar.checkBudget(10, 10, 200);
            assert.equal(expected, returned);
        });
        it('successful rent test', () => {
            const expected = 'You rent a car!';
            const returned = rentCar.checkBudget(10, 10, 100);
            assert.equal(expected, returned);
        });


    })
});