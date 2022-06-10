import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});









export default function Modal (props) {
  const { id, name, author } = props;
  const URL = `http://localhost:5000/books/${id}`;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteBook = async () => {
    try {
      await axios.delete(URL)
      handleClose();
      // navigate('/books');
      window.location.reload()
      alert("Book deleted successfully!");

    } catch (err) {
      console.log(err);
      handleClose()
    }
  }










  return (
    <div>
      <Button onClick={handleClickOpen} sx={{color: 'red'}} fullWidth>
        Delete
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{color: 'red', fontFamily: 'verdana'}}>{"Delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Are you sure you want to delete "${name}" by ${author}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> Cancel </Button>
          <Button onClick={deleteBook} sx={{color: 'red'}}> Delete </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}