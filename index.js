function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

this.info = function(){
        return `${this.title} by ${this.author} is ${this.pages} pages long, and ${this.read ? "I have read this book" : "I have not read this book"}`
    };
}

const book1 = new Book ("Recursion", "Blake Crouch", 336, false);
const book2 = new Book ("Dark Matter", "Blake Crouch", 368, true);
const book3 = new Book ("The Sisters Brothers", "Patrick deWitt", 328, true);

console.log(book1.info())
console.log(book2.info())
console.log(book3.info())