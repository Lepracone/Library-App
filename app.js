let myLibrary = [];

let showNew = document.getElementById("showNew");
let newBook = document.getElementById("newBook");
let cancelButton = document.getElementById("cancelButton");


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;          
}

Book.prototype.info = function(){
    let readStatus = null;
            if(this.read == true){
                readStatus = "already read."
            }else{
                readStatus = "not read yet."
            }
            return (this.title + " by " + this.author + ", " + this.pages + ", " + readStatus);
}

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
}


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
}

