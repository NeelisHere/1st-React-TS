import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 8000;

const corsOptions: cors.CorsOptions = {
    origin: [
        process.env.CLIENT_URL || 'http://localhost:5173',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}

const app = express();
app.use(cors(corsOptions))
app.use(express.json())
app.use('/user', userRouter)


app.get('/', (req, res) => {
    res.json({ success: true, message: 'ok' })
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})