class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        let book = {
            bookName,
            bookAuthor,
            payed: false
        };
        this.books.push(book);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {
        let isFound = false;
        for (const book of this.books) {
            if (book.bookName === bookName) {
                if (book.payed === true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    book.payed = true;
                    return `${bookName} has been successfully paid.`
                }
            }
        }

        if (!isFound) {
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName) {
        let isFound = false;
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book.bookName === bookName) {
                if (book.payed === false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                } else {
                    this.books.slice(i, 1);
                    return `${bookName} remove from the collection.`
                }
            }
        }

        if (!isFound) {
            throw new Error("The book, you're looking for, is not found.");
        }
    }

    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let result = [];
            let emptySlots = this.capacity - this.books.length;
            let message = `The book collection has ${emptySlots} empty spots left.`;
            result.push(message);
            let resArr = this.books.sort((book1, book2) => book1.bookName.localeCompare(book2.bookName));
            for (const el of resArr) {
                let elBookName = el.bookName;
                let elBookAuthor = el.bookAuthor;
                let elIsPayed = el.payed;
                if (elIsPayed == true) {
                    result.push(`${elBookName} == ${elBookAuthor} - Has Paid.`);
                } else {
                    result.push(`${elBookName} == ${elBookAuthor} - Not Paid.`);

                }

            }
            return result.join('\n');
        } else {
            let isFound = false;
            for (const book of this.books) {
                if (book.bookAuthor === bookAuthor) {
                    isFound = true;
                    let isPayed = book.payed;
                    if (isPayed) {
                        return `${book.bookName} == ${bookAuthor} - Has Paid.`;
                    } else {
                        return `${book.bookName} == ${bookAuthor} - Not Paid.`;
                    }

                }
            }
            if (!isFound) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




