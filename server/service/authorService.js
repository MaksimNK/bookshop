import { v4 as uuidv4 } from 'uuid';

class AuthorService {
  constructor() {
    this.authors = new Map();
  }

  addAuthor(authorData) {
    const authorId = uuidv4();
    const newAuthor = { id: authorId, ...authorData };
    this.authors.set(authorId, newAuthor);
    return newAuthor;
  }

  getAllAuthors() {
    return Array.from(this.authors.values());
  }

  getAuthorById(authorId) {
    return this.authors.get(authorId);
  }

  updateAuthor(authorId, updatedFields) {
    const author = this.getAuthorById(authorId);
    if (!author) {
      throw new Error('Author not found');
    }
    const updatedAuthor = { ...author, ...updatedFields };
    this.authors.set(authorId, updatedAuthor);
    return updatedAuthor;
  }

  deleteAuthor(authorId) {
    const author = this.getAuthorById(authorId);
    if (!author) {
      throw new Error('Author not found');
    }
    this.authors.delete(authorId);
  }
}

export default AuthorService;
