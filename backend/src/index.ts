import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import collegeRoutes from './routes/college.routes';
import chatRoutes from './routes/chat.routes';

dotenv.config();

const app = express();

// Allow ALL origins (most permissive - safe for this project)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.json({ status: 'Backend is running 🚀', database: process.env.DATABASE_URL ? 'set' : 'missing' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/college', collegeRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;

if (!process.env.VERCEL) {
    app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
}

export default app;