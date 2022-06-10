
// import React from 'react';
// import axios from 'axios';
// import styles from './Books.module.css';
// import {Button, LinearProgress} from '@mui/material';
// import { FaSadCry } from 'react-icons/fa'


// const URL = 'http://localhost:5000/books';




// export default function Books () {

//   const [books, set_books] = React.useState([]);
//   const [loading, set_loading] = React.useState(false)

//   const fetchBooks = async () => {
//     set_loading(true)
//     try {
//       const books = await axios.get(URL);
//       set_books(books.data.books);
//       set_loading(false)
//     } catch (err) {
//       console.log(err);
//       // set_loading(false);
//     }
//   }


//   React.useEffect(() => {
//     fetchBooks()
//   }, [])

//   console.log(books);

//   const books_elements = books.map((each, i) => {
//     return (
//       <div key={i} className={styles.box}>
//         { each.image.trim().length < 1 ?
//           `${<FaSadCry />} Image not available` :
//           <img src={each.image} alt={`${each.name} cover`}/>
//         }
//         <section className={styles.details}>
//           <h4> {each.name} </h4>
//           <h4 className={styles.author}> By {each.author} </h4>
//           <p> {each.price ? `₦ ${each.price}` : 'Free'} </p>
//           <p> {each.available ? "Available" : "Not in stock"} </p>
//           <Button variant='contained'> Update </Button>
//           <Button sx={{color: 'red'}}> Delete </Button>
//         </section>
//       </div>
//     )
//   })


  


//   return (
//     <div>
//       <h1> BOOKS AVAILABLE</h1>
//       <main className={styles.books_container}>
//         {loading ?
//           <LinearProgress fullWidth/> :
//           (books_elements)
//         }
//       </main>
//     </div>
//   )
// }






































import React from 'react';
import axios from 'axios';
import styles from './Books.module.css';
import {Button, LinearProgress} from '@mui/material';
import { FaSadCry } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import poster from '../../images/poster.jpg';
import Modal from '../Modal';


const URL = 'http://localhost:5000/books';




export default function Books () {

  const [books, set_books] = React.useState([]);
  const [loading, set_loading] = React.useState(false)

  const fetchBooks = async () => {
    set_loading(true)
    try {
      const books = await axios.get(URL);
      set_books(books.data.books);
      set_loading(false)
    } catch (err) {
      console.log(err);
      set_loading(false);
    }
  }


  React.useEffect(() => {
    fetchBooks()
  }, [])


  const books_elements = books.map((each, i) => {
    const { name, author, price, available, image, _id} = each;
    return (
      <div key={i} className={styles.box}>
        {
         each.image.trim().length < 1 ?
          <img src={poster} alt={`${name} cover`}/> :
          <img src={image} alt={`${name} cover`}/>
        }
        <section className={styles.details}>
          <h4> {name} </h4>
          <h4 className={styles.author}> By {author} </h4>
          <p> {price ? `₦ ${price}` : 'Free'} </p>
          <p> {available ? "Available" : "Not in stock"} </p>
          <Button LinkComponent={Link} to={`/books/${_id}`} variant='contained' fullWidth> Update </Button>
          <Modal id={_id} name={name} author={author} />
        </section>
      </div>
    )
  })


  


  return (
    <div>
      <h1> BOOKS AVAILABLE</h1>
      <main className={styles.books_container}>
        {loading ?
          <LinearProgress fullWidth/> :
          (books_elements)
        }
      </main>
    </div>
  )
}