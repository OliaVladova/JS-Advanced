let cinema = require('./cinema.js');
const { assert, expect } = require('chai');

describe('Cinema', () => {
    describe('showMovies test', () => {
        it('empty array test', () => {
            let expected = 'There are currently no movies to show.';
            let returned = cinema.showMovies([]);
            assert.equal(expected, returned);
        });
        it('valid output test', () => {
            let expected = 'King Kong, The Tomorrow War, Joker';
            let returned = cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']);
            assert.equal(expected, returned);
        });

    });
    describe('ticketPrice test', () => {
        it('invalid projection type test', () => {
            expect(() => cinema.ticketPrice('Crazy')).to.throw('Invalid projection type.');
        });
        it('valid price test', () => {
            let expected = 12.00;
            let returned = cinema.ticketPrice('Premiere');
            assert.equal(expected, returned);
        });
        it('should return price for projection type Normal', () => {
            const expectedPrice = 7.50;
            const actualPrice = cinema.ticketPrice('Normal');
            assert.equal(expectedPrice, actualPrice);
        });

        it('should return price for projection type Discount', () => {
            const expectedPrice = 5.50;
            const actualPrice = cinema.ticketPrice('Discount');
            assert.equal(expectedPrice, actualPrice);
        });

    });
    describe('swapSeatsInHall test', () => {
        it('valid swap test', () => {
            let expected = 'Successful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(1,5);
            assert.equal(expected, returned);
        });
        it('valid 20 seat test', () => {
            let expected = 'Successful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(1,20);
            assert.equal(expected, returned);
        });
        it('invalid first seat test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall('',20);
            assert.equal(expected, returned);
        });
        it('invalid second seat test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(5,'');
            assert.equal(expected, returned);
        });
        it('invalid input for seats test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall('','');
            assert.equal(expected, returned);
        });
        it('seat one less then 0 test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(-5,15);
            assert.equal(expected, returned);
        });
        it('seat two less then 0 test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(15,-15);
            assert.equal(expected, returned);
        });
        it('seat two equal to 0 test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(15,0);
            assert.equal(expected, returned);
        });
        it('seat one equal to 0 test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(0,4);
            assert.equal(expected, returned);
        });
        it('seat two more than 20 test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(15,48);
            assert.equal(expected, returned);
        });
        it('seat one more than 20 test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(75,5);
            assert.equal(expected, returned);
        });
        it('seat one equal to two test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(5,5);
            assert.equal(expected, returned);
        });
        it('seat one equal to two test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(75,75);
            assert.equal(expected, returned);
        });
        it('seat one equal to two test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(0,0);
            assert.equal(expected, returned);
        });
        it('seat one equal to two test', () => {
            let expected = 'Unsuccessful change of seats in the hall.';
            let returned = cinema.swapSeatsInHall(-5,-155);
            assert.equal(expected, returned);
        });
    });
});
