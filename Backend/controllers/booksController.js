import BookModel from '../model/BookModel.js';


// GET books
const getBooks = async (req, res) => {
  let books;
  try {
    books = await BookModel.find();
  } 
  catch (error) {
    console.log(error)
  }

  // Validation
  if(!books) return res.status(404).json({'message': 'Unable to load books'});
  return res.status(200).json({books});
}






// GET SINGLE book
const getSingleBook = async (req, res) => {
  let book;
  let id = req.params.id;
  try {
    book = await BookModel.findById(id)
  } 
  catch (error) {
    console.log(error)
  }

  // Validation
  if(!book) return res.status(404).json({'message': 'Book not found'});
  return res.status(200).json({book});
}






// ADD books
const addBooks = async (req, res) => {
  let new_book;
  const { name, author, price, description, available, image } = req.body; 

  try {
    new_book = new BookModel ({
      name: name,
      author: author,
      price: price,
      description: description,
      available: available,
      image: image,
    });
    await new_book.save();
  }
  catch (error) {
    console.log(error)
  }

  // Validation
  if(!new_book) return res.status(500 ).json({"message": "Unable to add book"});
  return res.status(201).json({new_book})
}



const updateBook = async (req, res) => {
  let book;
  let id = req.params.id;
  const { name, author, price, description, available, image } = req.body; // destructure the body

  try {
    book = await BookModel.findByIdAndUpdate(id, {
      name,
      author,
      price,
      description,
      available,
      image
    }) // Update

    book = await BookModel.save(); // Save  
  } 
  catch (error) {
    console.log(error)
  }

  // Validation
  if(!book) return res.status(404).json({'message': 'Unable to update book'});
  return res.status(200).json({book});
}







const deleteBook = async (req, res) => {
  let book;
  let id = req.params.id;

  try {
    book = await BookModel.findByIdAndRemove(id);
  } 
  catch (error) {
    console.log(error)
  }

  // Validation
  if(!book) return res.status(404).json({'message': 'Unable to delete book'});
  return res.status(200).json({'message': 'book successfully deleted'});
}









export {
  getBooks,
  getSingleBook,
  addBooks,
  updateBook,
  deleteBook,
}