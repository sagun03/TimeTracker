import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { saveDemoData } from '../../reducers/demo/demoAction';
import { Typography } from '@mui/material';
import DropDown from '../DropDown';
import { v4 as uuidv4 } from "uuid";

const FormDialog = () => {
  const authorData = useSelector((state) => state.author?.authorData)
  const taskData = useSelector((state) => state.task?.taskData)

  const [open, setOpen] = React.useState(false);
  const [demoData, setDemoData] = useState({ name: '', demo: 'demo'});

const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (e) => {
    dispatch(saveDemoData(demoData))
    setDemoData({name: '', demo: 'demo'})
    setOpen(false);
  };
  const handleChange = (e, type) => {
    setDemoData({...demoData, [type]: e.target.value, id: uuidv4()})
  }

  return (
    <div style={{ textAlign: 'center'}}>
      <Typography style={{ fontSize: '40px', margin: '20px'}}>Demo</Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Timer +
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'}}>
        <DialogTitle>demo</DialogTitle>
        <DialogContent>
        <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'}}>
          <TextField
            required
            margin="dense"
            id="name"
            label="Name of the demo"
            type="text"
            variant="standard"
            onChange={(e) => handleChange(e,'name')}
          />
          <DropDown label='author' menuItems={authorData}  setValue={handleChange}/>
          <DropDown label="task" menuItems={taskData} setValue={handleChange}/>  
          </div>
        </DialogContent>
        </div> 

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={!(demoData.name && demoData.author && demoData.task)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;