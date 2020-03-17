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
    //Renders new cards container
    cardsContainer.textContent = "";
    render();
};

function render(){
    //Create Elements
    const cardsContainer = document.getElementById("cardsContainer");

    for(i=0; i < myLibrary.length; i++){
        const frame = document.createElement("div");
        const picture = document.createElement("img");
        const textContainer = document.createElement("div");

        const bookTitle = document.createElement("h4");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");

        //Appends Elements inside the new card frame
        frame.appendChild(picture);
        textContainer.appendChild(bookTitle);
        textContainer.appendChild(bookAuthor);
        textContainer.appendChild(bookPages);
        textContainer.appendChild(bookRead);
        frame.appendChild(textContainer);
        //Appends the new frame inside the main cardsContainer
        cardsContainer.appendChild(frame);

        //Adds cardStyle class to frame
        frame.classList.add("cardStyle");

        //Fills the fields
        bookTitle.textContent =  myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pages;
        bookRead.textContent = myLibrary[i].readStatus;
    }
}


