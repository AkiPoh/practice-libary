// Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// Put a function into the constructor that can report the book info

function NewBook (title, author, numberOfPages, hasBeenRead) {
    this.title = title
    this.author = author
    this.numberOfPages = +numberOfPages
    this.hasBeenRead = !!hasBeenRead

    this.info = function () {
        return `${this.title} by ${this.author}, ${numberOfPages}, ${hasBeenRead ? "has been read" : "not read yet"}`
    }
}

Hobbit = new NewBook("The Hobbit", "J.R.R. Tolkien", 295, false)

console.log(Hobbit)
console.log(Hobbit.info())