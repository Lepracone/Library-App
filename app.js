let myLibrary = [];

let showNew = document.getElementById("showNew");
let newBook = document.getElementById("newBook");
let cancelButton = document.getElementById("cancelButton");
let isRead = document.getElementById("isRead");
let isReadValue = false;

//Object constructor structure
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    myLibrary.push(this);         
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
};

