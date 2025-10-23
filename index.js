const bookArr = [];
const container = document.getElementById("container");



function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();

this.info = function(){
        return `${this.title} by ${this.author} is ${this.pages} pages long, and ${this.read ? "I have read this book" : "I have not read this book"}, id: ${this.id}`
    };
}



const book1 = new Book ("Recursion", "Blake Crouch", 336, false);
const book2 = new Book ("Dark Matter", "Blake Crouch", 368, true);
const book3 = new Book ("The Sisters Brothers", "Patrick deWitt", 328, true);

bookArr.push(book1, book2, book3);



const displayBooks = function (arr){
arr.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-card');
    bookDiv.textContent = book.info();

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
    removeBtn.addEventListener('click', () => {
    arr.splice(index, 1);
    container.innerHTML = '';
    displayBooks(arr);
    });

    bookDiv.appendChild(removeBtn);
    container.appendChild(bookDiv);
})
}

container.innerHTML = '';
displayBooks(bookArr);



// modal dialog 

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");




const submit = document.querySelector("#submitBtn");
const form = document.getElementById('addBook')




submit.addEventListener('click', function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value.trim();
    const isConfirmed = document.querySelector('input[name="read"]:checked');
    const read = isConfirmed ? isConfirmed.value === "true" : false;

    const newBook = new Book(title, author, pages, read);
    bookArr.push(newBook);

    container.innerHTML = '';
    displayBooks(bookArr);
    dialog.close();
    form.reset();
});







