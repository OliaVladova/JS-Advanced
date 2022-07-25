let library = require('./library');
const { assert, expect } = require('chai');

describe('Library', () => {
    describe('calcPriceOfBook test', () => {
        it('invalid string input test', () => {
            expect(()=>library.calcPriceOfBook(5, 1992)).to.throw('Invalid input');
        });
        it('invalid year input test', () => {
            expect(()=>library.calcPriceOfBook('string', '1992')).to.throw('Invalid input');
        });
        it('half price test', () => {
            let expected = `Price of Carrie is 10.00`;
            let returned = library.calcPriceOfBook('Carrie', 1970);
            assert.equal(expected,returned);
        });
        it('half price when is 1980 test', () => {
            let expected = `Price of Carrie is 10.00`;
            let returned = library.calcPriceOfBook('Carrie', 1980);
            assert.equal(expected,returned);
        });
        it('full price when is 1980 test', () => {
            let expected = `Price of Carrie is 20.00`;
            let returned = library.calcPriceOfBook('Carrie', 2000);
            assert.equal(expected,returned);
        });

    });
    describe('findBook test', () => {
        it('empty array input test', () => {
            expect(()=>library.findBook([], '1992')).to.throw('No books currently available');
        });
        it('book is present test', () => {
            let expected = `We found the book you want.`;
            let returned = library.findBook(["Troy", "Life Style", "Torronto"], "Troy");
            assert.equal(expected,returned);
        });
        it('book is  not present test', () => {
            let expected = `The book you are looking for is not here!`;
            let returned = library.findBook(["Troy", "Life Style", "Torronto"], "Carrie");
            assert.equal(expected,returned);
        });

    });
    describe('arrangeTheBooks test', () => {
        it('not integer input test', () => {
            expect(()=>library.arrangeTheBooks('1992')).to.throw('Invalid input');
        });
        it('negative integer input test', () => {
            expect(()=>library.arrangeTheBooks(-1992)).to.throw('Invalid input');
        });
        it('not enough space test', () => {
            let expected = `Insufficient space, more shelves need to be purchased.`;
            let returned = library.arrangeTheBooks(50);
            assert.equal(expected,returned);
        });
        it('full space test', () => {
            let expected = `Great job, the books are arranged.`;
            let returned = library.arrangeTheBooks(40);
            assert.equal(expected,returned);
        });
        it('full space test', () => {
            let expected = `Great job, the books are arranged.`;
            let returned = library.arrangeTheBooks(30);
            assert.equal(expected,returned);
        });
    });
});