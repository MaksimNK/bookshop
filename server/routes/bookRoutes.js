import express, { query } from 'express';
import BookService from '../service/bookService.js';

const router = express.Router();
const bookService = new BookService();

router.post('/', (req, res) => {
  try {
    const newBook = bookService.addBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



router.get('/', (req, res) => {
  const { category, publishing } = req.query; 

  let books;
  console.log(category, publishing);
  if (category) {
    books = bookService.getAllBooks(category);
  } else if (publishing) {
    books = bookService.getAllBooksPublishing(publishing);
  } else {
    books = bookService.getAllBooks();
  }

  res.json(books);

});

router.get('/search', (req, res) => {
  const { title } = req.query;

  if (title) {
    const books = bookService.searchInTitle(title);
    res.json(books);
  } else {
    res.status(400).json({ error: 'Title is required' });
  }
});


router.get('/:id', (req, res) => {
  const book = bookService.getBookById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found.' });
  }
});

router.put('/:id', (req, res) => {
  try {
    const updatedBook = bookService.updateBook(req.params.id, req.body);
    res.json(updatedBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    bookService.deleteBook(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
