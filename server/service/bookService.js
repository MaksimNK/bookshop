import { v4 as uuidv4 } from 'uuid';

class BookService {
  constructor() {
    this.books = new Map();
  }

  addBook(bookData) {
    const bookId = uuidv4();
    const newBook = { id: bookId, ...bookData };
    this.books.set(bookId, newBook);
    return newBook;
  }

  getAllBooks(category) {
    const allBooks = Array.from(this.books.values());
    if (category) {
      console.log(category);
      console.log(allBooks);
      return allBooks.filter(book => book.category === category);
    }
    return null;
  }

  searchInTitle(title) {
    const allBooks = Array.from(this.books.values());
    if (title) {
      return allBooks.filter((book) =>
        book.title && book.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    return null;
  }
  
  getAllBooksPublishing(publishing) {

    const allBooks = Array.from(this.books.values());
    if (publishing) {
      return allBooks.filter(book => book.publishing === publishing);
    }

    return allBooks;
  }

  getBookById(bookId) {
    return this.books.get(bookId);
  }

  updateBook(bookId, updatedFields) {
    const book = this.getBookById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }
    const updatedBook = { ...book, ...updatedFields };
    this.books.set(bookId, updatedBook);
    return updatedBook;
  }

  deleteBook(bookId) {
    const book = this.getBookById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }
    this.books.delete(bookId);
  }

  getLastes(){
    const books = Array.from(this.books.values()).reverse();
    return books.slice(0, 10);
  }

}

export default BookService;






/*

{
  "title": "На маяк",
  "author": "Вирджиния Вулф",
  "series": "Магистраль. Главный тренд.",
  "publisher": "Издательство \"Эксмо\"",
  "isbn": "978-5-04-198784-8",
  "ageLimit": "16+",
  "originalTitle": "The Awakening",
  "coverType": "Мягкая обложка",
  "pages": 256,
  "weight": "0 кг",
  "thickness": "15 мм",
  "format": "125x200 мм",
  "paperMaterial": "Бумага офсетная пухлая",
  "readingTime": "12 часов 48 минут",
  "description": "На маяк — книга категорически необычная. Два дня, разделенные десятилетним промежутком времени...",
  "category": "Фантастика"
}


{ 
  "title": "На маяк",
  "author": "Вирджиния Вулф",
  "series": "Магистраль. Главный тренд.",
  "publishing": "magistr",
  "image": "/image/home/header.png",
  "isbn": "978-5-04-198784-8",
  "ageLimit": "16+",
  "originalTitle": "The Awakening",
  "coverType": "Мягкая обложка",
  "pages": 256,
  "weight": "0 кг",
  "thickness": "15 мм",
  "format": "125x200 мм",
  "paperMaterial": "Бумага офсетная пухлая",
  "readingTime": "12 часов 48 минут",
  "description": "На маяк — книга категорически необычная. Два дня, разделенные десятилетним промежутком времени...",
  "category": "artistic"
}


*/