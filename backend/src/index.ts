import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import collegeRoutes from './routes/college.routes';
import chatRoutes from './routes/chat.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Route
app.use('/api/auth', authRoutes);
app.use('/api/college', collegeRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;

if (!process.env.VERCEL) {
    app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
}

export default app;