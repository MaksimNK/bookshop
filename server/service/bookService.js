class BookService {
  constructor() {
    this.books = new Map();
    this.currentId = 1; // Start ID counter from 1
  }

  addBook(bookData) {
    const bookId = this.currentId; // Use the current ID for the new book
    const newBook = { id: bookId, ...bookData };
    this.books.set(bookId, newBook);
    this.currentId += 1; // Increment the ID for the next book
    return newBook;
  }

  getAllBooks(category) {
    const allBooks = Array.from(this.books.values());
    if (category) {
      return allBooks.filter((book) => book.category === category);
    }
    return allBooks; // Return all books if no category is provided
  }

  searchInTitle(title) {
    const allBooks = Array.from(this.books.values());
    if (title) {
      return allBooks.filter((book) =>
        book.title && book.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    return allBooks;
  }

  getAllBooksPublishing(publishing) {
    const allBooks = Array.from(this.books.values());
    if (publishing) {
      return allBooks.filter((book) => book.publishing === publishing);
    }
    return allBooks;
  }

  getBookById(bookId) {
    return this.books.get(bookId);
  }

  updateBook(bookId, updatedFields) {
    const book = this.getBookById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    const updatedBook = { ...book, ...updatedFields };
    this.books.set(bookId, updatedBook);
    return updatedBook;
  }

  deleteBook(bookId) {
    const book = this.getBookById(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    this.books.delete(bookId);
  }

  getLastes() {
    const books = Array.from(this.books.values()).reverse();
    return books.slice(0, 10);
  }
}

export default BookService;
