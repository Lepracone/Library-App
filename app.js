let showNew = document.getElementById("showNew");
let newBook = document.getElementById("newBook");
let cancelButton = document.getElementById("cancelButton");
let isRead = document.getElementById("isRead");
let isReadValue = false;

let myLibrary = [];

//Prevent page refresh after submit form
let form = document.getElementById("bookForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

//Object constructor structure
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;         
};

Book.prototype.info = function(){
    const readStatus = this.read ? "read" : "not read yet";
            return (this.title + " by " + this.author + ", " + this.pages + ", " + readStatus);
};

//Toggles hidden menu
showNew.addEventListener("click", function(){
    toggleClasses();
});

cancelButton.addEventListener("click", function(){
    toggleClasses();
});

function toggleClasses(){
    newBook.classList.toggle("invisible");
    showNew.classList.toggle("invisible");
    cancelButton.classList.toggle("invisible");
};

//isRead logic
isRead.addEventListener("click", function(){
    isReadValue = !isReadValue;
    isRead.textContent = isReadValue ? "Read": "Unread";
});

//Creates new object
function createNewObject(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let addedBook = new Book(title, author, pages, isReadValue);
    myLibrary.push(addedBook);
};

function render(){
    const cardsContainer = document.getElementById("cardsContainer");

    const frame = document.createElement("div");
    const picture = document.createElement("img");
    const textContainer = document.createElement("div");

    const bookTitle = document.createElement("h4");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");
}

