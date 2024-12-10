import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
import autorRoutes from './routes/autorRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import {setupSwagger} from './util/swagger.js';
import BookService from './service/bookService.js';
import booksData from './booksData.js';

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const app = express();

setupSwagger(app);

app.use(cors(corsOptions));

app.use(express.json());

const bookService = new BookService();

app.use('/users', userRoutes);
app.use('/books', bookRoutes(bookService));
app.use('/author', autorRoutes);
app.use('/category', categoryRoutes);
app.use('/auth', authRoutes);


  
booksData.forEach(book => bookService.addBook(book));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
