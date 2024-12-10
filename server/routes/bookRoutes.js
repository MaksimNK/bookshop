import express from 'express';

const createBookRoutes = (bookService) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    try {
      const newBook = bookService.addBook(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get('/lastes', (req, res) => {
    try {
      const books = bookService.getLastes();
      res.status(201).json(books);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.get('/', (req, res) => {
    const { category, publishing } = req.query;
    let books;
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
    const bookId = Number(req.params.id);
    const book = bookService.getBookById(bookId);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found.' });
    }
  });

  router.put('/:id', (req, res) => {
    try {
      const bookId = Number(req.params.id);
      const updatedBook = bookService.updateBook(bookId, req.body);
      res.json(updatedBook);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  router.delete('/:id', (req, res) => {
    try {
      const bookId = Number(req.params.id);
      bookService.deleteBook(bookId);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  return router;
};

export default createBookRoutes;
