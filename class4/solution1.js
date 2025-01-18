

class Library {
    constructor(name, location, noOfBooks) {
        this.name = name;
        this.location = location;
        this.noOfBooks = noOfBooks;
        this.categories = [];
        this.books = [];
    }



    addBook(title, author, isAvailable, ratings = []) {
        const newBook = {
            title: title,
            author: author,
            isAvailable: isAvailable,
            ratings: ratings,
        }
        this.books.push(newBook)
        this.noOfBooks++;
        return `${title} has been added to the library.`
    }


    getAvailableBooks() {
        if (this.books.length > 0) {
            return this.books.filter((book) => book.isAvailable).map((book) => book.title)
        }
        else {
            return []
        }
    }


    //Calculates and returns the average rating for a 
    // given book title. If the book doesn’t exist, return null.
    calculateAverageRating(title) {
        const book = this.books.find((book) => book.title === title)

        if (book && book.ratings.length > 0) {
            const totalRating = book.ratings.reduce((acc, rating) => {
                return acc + rating
            }, 0)
            return (totalRating / book.ratings.length).toFixed(2)
        } else {
            return null
        }
    }

    addCategory(category) {
        if (!this.categories.includes(category)) {
            this.categories.push(category)
            return `${category} has been added.`
        } else {
            return `category already exists`
        }
    }

}

const myLibrary = new Library("City Library", "Downtown", 100);

// Add books
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", true, [5, 4, 4]);
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", false, [5, 5, 5]);
myLibrary.addBook("1984", "George Orwell", true, [4, 5, 4, 5]);

// Get available books
console.log(myLibrary.getAvailableBooks()); // ["The Great Gatsby", "1984"]

// Calculate average rating
console.log(myLibrary.calculateAverageRating("1984")); // "4.50"

// Add categories
console.log(myLibrary.addCategory("Fiction")); // "Fiction has been added."
console.log(myLibrary.addCategory("Fiction")); // "Category already exists."


// Iterate Over the Object
//Write a for...in loop to iterate over the library object.For each key:
//Print the key and its value.
//If the value is an array, iterate over its elements.

for (const key in myLibrary) {
    const value = myLibrary[key]

    console.log(`${key}: ${value}`)

    if (Array.isArray(value)) {
        console.log(`Elements of ${key}: `)
        value.forEach((element, index) => {
            console.log(`  [${index}] ${JSON.stringify(element)}`)
        })
    }
}
//dublicate of library using spread oprator
const duplicateLibrary = { ...myLibrary }

console.log(myLibrary == duplicateLibrary);
console.log(myLibrary === duplicateLibrary);

//== (loose equality) checks if the two operands are 
// equal in value, but it allows type conversion. 
// However, since we are comparing two different objects, 
// it still returns false because they are different objects in memory.


//  === (strict equality) checks if the two operands are equal 
// in both value and type.Since myLibrary and duplicateLibrary 
// are two distinct objects in memory, it also returns false.