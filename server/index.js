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
import categoriesData from './categoriesData.js';
import publishingsData from './publishingsData.js';
import CategoryService from './service/categoryService.js';

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const app = express();

setupSwagger(app);

app.use(cors(corsOptions));

app.use(express.json());

const bookService = new BookService();
const categoryService = new CategoryService();

app.use('/users', userRoutes);
app.use('/books', bookRoutes(bookService));
app.use('/author', autorRoutes);
app.use('/category', categoryRoutes(categoryService));
app.use('/auth', authRoutes);


  
booksData.forEach(book => bookService.addBook(book));
categoriesData.forEach(category => categoryService.addCategory(category.title, category.image, category.category));
publishingsData.forEach(publishing => categoryService.addPublishing(publishing.title, publishing.image, publishing.publishing));


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
