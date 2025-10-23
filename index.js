const bookArr = [];
const container = document.getElementById("container");



function Book (title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id

this.info = function(){
        return `${this.title} by ${this.author} is ${this.pages} pages long, and ${this.read ? "I have read this book" : "I have not read this book"}, id: ${this.id}`
    };
}

const libAdd = function libraryAdd (book) {
    const id = crypto.randomUUID();
    const importBook = new Book(book.title, book.author, book.pages, book.read, id);
    bookArr.push(importBook);  
}


const book1 = new Book ("Recursion", "Blake Crouch", 336, false);
const book2 = new Book ("Dark Matter", "Blake Crouch", 368, true);
const book3 = new Book ("The Sisters Brothers", "Patrick deWitt", 328, true);

libAdd(book1);
libAdd(book2);
libAdd(book3);



const arrDisplay = function (arr){
    for (let i = 0; i < arr.length; i++){
        const newH3 = document.createElement("h3");
        newH3.innerText = arr[i].info()
        container.appendChild(newH3);
        newH3.className += "cards"
    }
} 


arrDisplay(bookArr);


// modal dialog 

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submit = document.querySelector("#submitBtn");

function checkRadio(){
    const isConfirmed = document.querySelector('input[name="read"]:checked');
    if (isConfirmed) {
        const booleanValue = isConfirmed.value === "true";
        return booleanValue ? "I have read this book" : "I have not read this book";
    } else {
        return "no selection";
    }
    
}


submit.addEventListener('click', function(event){
    event.preventDefault();

    const newH3 = document.createElement("h3")
    const id = crypto.randomUUID();
    newH3.innerText =`${title.value} by ${author.value} is ${pages.value} pages long, and ${checkRadio()}, id: ${id}`;
    container.appendChild(newH3);
})

function removeBook(id) {

    bookArr.filter(id)
}
