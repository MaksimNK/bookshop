import express from 'express';
import AuthorService from '../service/authorService.js';

const router = express.Router();
const authorService = new AuthorService();

router.post('/', (req, res) => {
  try {
    const newAuthor = authorService.addAuthor(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', (req, res) => {
  const authors = authorService.getAllAuthors();
  res.json(authors);
});

router.get('/:id', (req, res) => {
  const author = authorService.getAuthorById(req.params.id);
  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ error: 'Author not found' });
  }
});

router.put('/:id', (req, res) => {
  try {
    const updatedAuthor = authorService.updateAuthor(req.params.id, req.body);
    res.json(updatedAuthor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    authorService.deleteAuthor(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
