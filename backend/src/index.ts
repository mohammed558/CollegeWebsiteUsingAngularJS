import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import collegeRoutes from './routes/college.routes';
import chatRoutes from './routes/chat.routes';

dotenv.config();

const app = express();

// Allow requests from the frontend
app.use(cors({
    origin: [
        'https://college-website-using-angular-js-yu.vercel.app',
        'http://localhost:4200'
    ],
    credentials: true
}));

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.json({ status: 'Backend is running 🚀', database: process.env.DATABASE_URL ? 'Connected' : 'Missing URL' });
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