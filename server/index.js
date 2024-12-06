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

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

const app = express();

setupSwagger(app);

app.use(cors(corsOptions));

app.use(express.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
//app.use('/author', autorRoutes);
app.use('/auth', authRoutes);



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
