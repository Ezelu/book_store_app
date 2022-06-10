import React from 'react';
import { Link, useNavigate } from 'react-router-dom'


const styles = {
  color: "white",
  background: " #180022",
  height: '40px',
  width: '50%',
  display: 'block',
  margin: '5% auto',
  fontSize: '1.8em;',
  outline: 0,
  border: 0,
  cursor: 'pointer'
}


export default function Home () {
  const navigate = useNavigate();

  return (
    <div>
      <h1> Welcome Back To Your Books Dashboard </h1>
      <button style={styles} onClick={() => navigate('/books')} to="/books" fullWidth> View Books </button>
    </div>
  )
}