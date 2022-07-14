function database(arr, criterion) {
    let arrOfTickets = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    arr.forEach(el => {
        [destination, price, status] = el.split('|');
        let ticket = new Ticket(destination, Number(price), status);
        arrOfTickets.push(ticket);
    });

     arrOfTickets.sort((el1, el2) => {
        if (criterion == "destination") {
            return el1.destination.localeCompare(el2.destination);
        } else if (criterion == "price") {
            return el1.price - el2.price;
        } else if (criterion == "status") {
            return el1.status.localeCompare(el2.status);
        }
    });
    return arrOfTickets;
}


console.log(database(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'

));
