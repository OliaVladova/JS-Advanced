class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'colledian': 500
        };
        this.listOfParticipants = [];
    };

    registerParticipant(name, condition, money) {

        if (condition !== 'child' && condition !== 'student' && condition !== 'collegian') {
            throw new Error('Unsuccessful registration at the camp.');
        }
        for (const participant of this.listOfParticipants) {
            if (participant.name === name) {
                return `The ${name} is already registered at the camp.`;
            }
        }
        let neededMoney = this.priceForTheCamp[condition];
        if (money < neededMoney) {
            return `The money is not enough to pay the stay at the camp.`;
        } else {
            let participant = {
                name,
                condition,
                power: 100,
                wins: 0
            };
            this.listOfParticipants.push(participant);
            return `The ${name} was successfully registered.`
        }
    }
    unregisterParticipant(name) {
        let isFound = false;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let participant = this.listOfParticipants[i];
            if (participant.name === name) {
                isFound = true;
                this.listOfParticipants.splice(i, 1);
                return `The ${name} removed successfully.`;
            }

        }

        if (!isFound) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name == participant1);;

        if (!player1) {
            throw new Error('Invalid entered name/s.');
        }

        if (typeOfGame == 'Battleship') {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame == 'WaterBalloonFights') {
            let nameOfWinner = '';

            let player2 = this.listOfParticipants.find(x => x.name == participant2);

            if (!player2) {
                throw new Error('Invalid entered name/s.');
            }

            if (player1.condition != player2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (player1.power > player2.power) {
                player1.wins++;
                nameOfWinner = player1.name;
            } else if (player2.power > player1.power) {
                player2.wins++;
                nameOfWinner = player2.name;
            } else {
                return 'There is no winner.';
            }

            return `The ${nameOfWinner} is winner in the game ${typeOfGame}.`;
        }
    }
    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        result += '\n';
        let arr = [];
        this.listOfParticipants.sort((a1, b1) => b1.wins - a1.wins);
        for (const person of this.listOfParticipants) {
            let res = `${person.name} - ${person.condition} - ${person.power} - ${person.wins}`;
            arr.push(res);

        }
        let message = arr.join('\n');
        return result + message;
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));



