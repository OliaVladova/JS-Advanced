let flowerShop = require('./03. Flowers Shop_Ресурси/flowerShop');
const { assert, expect } = require('chai');

describe('Flower Shop', () => {
    describe('calcPriceOfFlowers test', () => {
        it('invalid input all test', () => {
            expect(() => flowerShop.calcPriceOfFlowers(0, "", '')).to.throw('Invalid input!');
        });
        it('invalid flower test', () => {
            expect(() => flowerShop.calcPriceOfFlowers(0, 15, 15)).to.throw('Invalid input!');
        });
        it('invalid price test', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower', '', 15)).to.throw('Invalid input!');
        });
        it('invalid qantity test', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower', 15, '')).to.throw('Invalid input!');
        });
        it('valid calcPrice test', () => {
            let expected = 'You need $150.00 to buy flower!'
            let returned = flowerShop.calcPriceOfFlowers('flower', 15, 10);

            assert.equal(expected,returned);
        });

    });
    describe('checkFlowersAvailable test', () => {

        it('flower is present test', () => {
            let expected = 'The Rose are available!'
            let returned = flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]);

            assert.equal(expected,returned);
        });
        it('flower is not present test', () => {
            let expected = 'The Tulip are sold! You need to purchase more!'
            let returned = flowerShop.checkFlowersAvailable('Tulip', ["Rose", "Lily", "Orchid"]);

            assert.equal(expected,returned);
        });
    });
    describe('sellFlowers test', () => {
        it('correct sell test', () => {
            let expected = 'Rose / Orchid'
            let returned = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],1);

            assert.equal(expected,returned);
        });
        it('invalid arr test', () => {
            expect(() => flowerShop.sellFlowers("", 2)).to.throw('Invalid input!');
        });
        it('invalid position test', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],-1)).to.throw('Invalid input!');
        });
        it('invalid position test', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"],5)).to.throw('Invalid input!');
        });


    });
});