import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Book from './components/Book/Books';
import UpdateBook from './components/Book/UpdateBook';




export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Book />} exact />
        <Route path="/books/:id" element={<UpdateBook />} exact />
      </Routes>

    </div>
  );
}


