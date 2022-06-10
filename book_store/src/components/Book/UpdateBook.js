import React from 'react';
import styles from '../AddBook.module.css';
import { Checkbox, CircularProgress, FormControlLabel} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'



export default function BookDetails () {
  const id = useParams().id;
  const navigate = useNavigate();
  const URL = `http://localhost:5000/books/${id}`;
  const [loading, set_loading] = React.useState(false);
  const [checked, set_checked] = React.useState(true);
  const [formData, set_FormData] = React.useState({
    name: '',
    author: '',
    description: '',
    available: true,
    price: 0,
    image: ''
  })
  


  const fetchSingleBook = async () => {
    set_loading(true);
    try {
      const data = await axios.get(URL)
      set_FormData(data.data.book)
      set_loading(false)
    } catch (err) {
      console.log(err);
      set_loading(false);
    }
  }


  function handle_formData (e) {
    set_FormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }



  React.useEffect(() => {
    fetchSingleBook()
  }, [id]);



  const updateBook = async (incoming_data) => {
    set_loading(true)
    try {
      await axios.put(URL, incoming_data); // Send book to database
      set_loading(false);
      alert("Book updated successfully!")
      navigate('/books') // Redirect back to books
    } 
    catch (err) {
      console.log(err);
      set_loading(false);
      return false
    }
  }




  function handle_submit (event) {
    event.preventDefault();
    const { name, author} = formData;

    if( name.trim().length < 1 || author.trim().length < 1 ) {
      alert('Please fill all details');
      return false;
    }

    const new_book = {
      ...formData,
      available: checked,
    }

    updateBook(new_book); // Create book
    
  }




  return (
    <div>
      <h1> Update Book Details </h1>
      
      
      <form className={styles.form} onSubmit={handle_submit}>
        <span> Book Title <i> * </i> </span>
        <input type="text" placeholder="Enter book title" name='name' value={formData.name} onChange={handle_formData} required/>

        <span> Author <i> * </i> </span>
        <input type="text" placeholder="Enter Author" name='author' value={formData.author} onChange={handle_formData} required/>

        <span> Price </span>
        <input type="number" placeholder="Enter book price" name='price' value={formData.price} onChange={handle_formData} />

        <span> Description </span>
        <input type="text" placeholder="Enter Short description" name='description' value={formData.description} onChange={handle_formData} />

        <span> Image URL </span>
        <input type="url" placeholder="Enter image URL" name='image' value={formData.image} onChange={handle_formData} />

        <FormControlLabel 
          control={<Checkbox checked={checked} onChange={() => set_checked(prev => !prev)}/>} 
          label="Available?" 
          name='available' />

        <button type="submit"> { loading ? <CircularProgress sx={{color: "white"}}/> : "Update Book" } </button>
      </form>
    </div>
  )
}