let showNew = document.getElementById("showNew");
let newBook = document.getElementById("newBook");
let cancelButton = document.getElementById("cancelButton");
let isRead = document.getElementById("isRead");
let isReadValue = false;
let myLibrary = [
    {
        title: "Harry Potter and the Azkaban Prisioner",
        author: "J.K. Rowling",
        pages: 256,
        imageUrl: "https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/harry_potter_8film_2000x3000.jpg",
        read: true
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        pages: 256,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
        read: false
    }
];
//Initial Render
render();
addButtonsFunction();

//Prevent page refresh after submit form
let form = document.getElementById("bookForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


//Object constructor structure
function Book(title, author, pages, imageUrl, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.imageUrl = imageUrl;
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
    let imageUrl = document.getElementById("imageUrl").value;
    let addedBook = new Book(title, author, pages, imageUrl, isReadValue);
    myLibrary.push(addedBook);
    //Renders new cards container
    clearAll();
    render();
    addButtonsFunction();
};

function render(){
    //Create Elements
    const cardsContainer = document.getElementById("cardsContainer");

    for(i=0; i < myLibrary.length; i++){
        if(myLibrary[i] != null){

        
        const frame = document.createElement("div");
        const picture = document.createElement("div");
        const textContainer = document.createElement("div");

        const bookTitle = document.createElement("h3");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookRead = document.createElement("p");
        const deleteCard  = document.createElement("button");

        //Appends Elements inside the new card frame
        frame.appendChild(picture);
        textContainer.appendChild(bookTitle);
        textContainer.appendChild(bookAuthor);
        textContainer.appendChild(bookPages);
        textContainer.appendChild(bookRead);
        frame.appendChild(textContainer);
        frame.appendChild(deleteCard);
        //Appends the new frame inside the main cardsContainer
        cardsContainer.appendChild(frame);

        //Adds cardStyle class to frame
        frame.classList.add("cardStyle");
        picture.classList.add("imageContainer");
        textContainer.classList.add("textContainer");

        //Fills the fields
        if(myLibrary[i].imageUrl === ""){
            picture.innerHTML = '<img src="https://pbs.twimg.com/profile_images/783312363978129408/R6vKaLYH_400x400.jpg">'
        }else{
            picture.innerHTML = '<img src="'+myLibrary[i].imageUrl+'">';
        }
        
        bookTitle.textContent =  myLibrary[i].title;
        bookAuthor.innerHTML = "<b>Author:  </b> " + myLibrary[i].author;
        bookPages.innerHTML = "<b>Number of Pages:  </b> " + myLibrary[i].pages;
        bookRead.innerHTML = myLibrary[i].read? "<b>Read</b>":"<b>Unread</b>";

        //Edit Buttons
        deleteCard.innerHTML = '<i class="fas fa-trash-alt trashButton"></i>';
        deleteCard.classList.add("deleteButton");
        deleteCard.setAttribute("index", i);
    }
}
    
}

//Adds click event calls to new rendered buttons
function addButtonsFunction(){
   let deleteButton = document.querySelectorAll(".deleteButton");
    deleteButton.forEach(button => {
        button.addEventListener("click", function(e){
            deleteElement(e.target.getAttribute("index"));
        });
    });
};

function deleteElement(el){
    myLibrary[el] = null;
    clearAll();
    render();
    addButtonsFunction();
}

function clearAll(){
    cardsContainer.textContent = "";
}





