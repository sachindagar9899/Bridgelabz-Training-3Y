// Q3: Library Management System
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
            return;
        }
        this.isIssued = true;
        console.log(`${this.title} has been issued.`);
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} was not issued.`);
            return;
        }
        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
    new Book("1984", "George Orwell", "ISBN103")
];

function findBookByISBN(isbn) {
    return books.find(book => book.ISBN === isbn);
}

console.log("Available books:", books.filter(book => !book.isIssued));
const selectedBook = findBookByISBN("ISBN102");
if (selectedBook) selectedBook.issueBook();
console.log("Available after issue:", books.filter(book => !book.isIssued));
