// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info

function Book (title, author, numberOfPages, hasBeenRead) {
    this.title = title
    this.author = author
    this.numberOfPages = +numberOfPages
    this.hasBeenRead = !!hasBeenRead

    this.info = function () {
        return `${this.title} by ${this.author}, ${numberOfPages}, ${hasBeenRead ? "has been read" : "not read yet"}`
    }
}

function addBookToLibary (title, author, numberOfPages, hasBeenRead) {
    library.push(new Book(title, author, numberOfPages, hasBeenRead))

    updateGrid()
}

function updateGrid () {
    let booksDivs = document.querySelectorAll(".book")
    for (let i = 0; i < booksDivs.length; i++) {
        grid.removeChild(booksDivs[i])
    }

library.map((item, index) => {
        let bookDiv = document.createElement("div")
        bookDiv.classList.add("book")
        bookDiv.setAttribute("ID", ``)

        let titleBook = document.createElement("h2")
        titleBook.classList.add("titleBook")
        titleBook.textContent = item.title
        bookDiv.appendChild(titleBook)

        let authorBook = document.createElement("div")
        authorBook.classList.add("authorBook")
        authorBook.textContent = item.author
        bookDiv.appendChild(authorBook)

        let numberOfPagesBook = document.createElement("div")
        numberOfPagesBook.classList.add("numberOfPagesBook")
        numberOfPagesBook.textContent = "Pages: "
        let numberOfPagesBoldBook = document.createElement("strong")
        numberOfPagesBoldBook.textContent = item.numberOfPages
        numberOfPagesBook.appendChild(numberOfPagesBoldBook)
        bookDiv.appendChild(numberOfPagesBook)
        
        let inputsDivBook = document.createElement("div")
        inputsDivBook.classList.add("inputsDivBook")

        let hasBeenReadDivBook = document.createElement("div")
        hasBeenReadDivBook.classList.add("hasBeenReadDivBook")

        let hasBeenReadInputBook = document.createElement("input")
        hasBeenReadInputBook.setAttribute("type", "checkbox")
        hasBeenReadInputBook.setAttribute("id", `hasBeenReadInputBookID${index}`)
        hasBeenReadInputBook.setAttribute("class", "hasBeenReadInputBook")
        hasBeenReadInputBook.checked = item.hasBeenRead
        hasBeenReadDivBook.appendChild(hasBeenReadInputBook)

        let hasBeenReadLabelBook = document.createElement("label")
        hasBeenReadLabelBook.classList.add("hasBeenReadLabelBook")
        hasBeenReadLabelBook.setAttribute("for", `hasBeenReadInputBookID${index}`)
        hasBeenReadLabelBook.textContent = "Has been read"
        hasBeenReadDivBook.appendChild(hasBeenReadLabelBook)

        inputsDivBook.appendChild(hasBeenReadDivBook)

        let deleteDivBook = document.createElement("div")
        deleteDivBook.classList.add("deleteDivBook")

        let deleteButtonBook = document.createElement("button")
        deleteButtonBook.classList.add("deleteButtonBook")
        deleteButtonBook.textContent = "DELETE"
        deleteButtonBook.addEventListener("click", () => {
            library.splice(index, 1)
            updateGrid()
        })
        inputsDivBook.appendChild(deleteButtonBook)

        bookDiv.appendChild(inputsDivBook)
        grid.appendChild(bookDiv)
    })
}

let library = []

let main = document.querySelector("main")
let grid = document.querySelector(".grid")
let form = document.querySelector("#bookAdd")


form.addEventListener("submit", (event) => {
    addBookToLibary(
        document.querySelector("#titleAdd").value, 
        document.querySelector("#authorAdd").value, 
        +document.querySelector("#numberOfPagesAdd").value, 
        document.querySelector("#hasBeenReadAdd").checked
    )
    document.querySelector("#titleAdd").value = ""
    document.querySelector("#authorAdd").value = ""
    document.querySelector("#numberOfPagesAdd").value = ""
    document.querySelector("#hasBeenReadAdd").checked = false
    console.log(library)
    event.preventDefault()
})

let Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
console.log(Hobbit)
console.log(Hobbit.info())