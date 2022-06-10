import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/book-routes.js';

const app = express();


// Middlewares
app.use(express.json()) // Converts our requests to json format


// Set CORS
app.use(cors())

app.use('/books', router); // site.domain/books






// connect to database mz9ZG5Bnmi3Z6xT2
const DATABASE = mongoose.connect("mongodb+srv://admin:mz9ZG5Bnmi3Z6xT2@cluster0.tzchj.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Connected to database'))
.then(() => app.listen(5000, () => console.log("Server Started on port 5000")))
.catch(err => console.log(err)) 




// mz9ZG5Bnmi3Z6xT2




