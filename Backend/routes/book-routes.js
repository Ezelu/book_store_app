import express from 'express';
import { addBooks, deleteBook, getBooks, getSingleBook, updateBook } from '../controllers/booksController.js';


const router = express.Router();

router.get('/', getBooks) // GET books route

router.get('/:id', getSingleBook) // GET single book route

router.post('/', addBooks) // ADD books route 

router.put('/:id', updateBook) // UPDATE books route

router.delete('/:id', deleteBook) // DELETE books route






export default router;