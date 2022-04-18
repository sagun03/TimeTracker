import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { saveAuthorData } from '../../reducers/author/authorAction';
import { v4 as uuidv4 } from "uuid";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [authorData, setAuthorData] = useState({ name: '', email: '',});
  console.log('authorData', authorData)
const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (e) => {
    dispatch(saveAuthorData(authorData))
    setOpen(false);
  };
  const handleChange = (e, type) => {
    setAuthorData({...authorData, [type]: e.target.value, id: uuidv4()})
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD AUTHOR
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>AUTHOR</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add Author data from here
          </DialogContentText>
          <TextField
            margin="dense"
            required
            id="name"
            label="Name of the Author"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e,'name')}
          />
          <TextField
            margin="dense"
            id="email"
            required
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e,'email')}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={!(authorData.name && authorData.email)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog