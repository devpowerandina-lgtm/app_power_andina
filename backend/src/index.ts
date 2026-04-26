import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { authRouter } from './modules/auth/infrastructure/AuthRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Power Andina API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
