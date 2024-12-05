import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
import autorRoutes from './routes/autorRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/author', autorRoutes);
app.use('/category', categoryRoutes);
app.use('/auth', authRoutes);



app.get('/', (req, res) => {
    res.status(201).json('Hello world');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
