import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { saveTaskData } from '../../reducers/task/taskAction';
import { v4 as uuidv4 } from "uuid";

const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [taskData, setTaskData] = useState({ name: '', desc: '',});
  console.log('taskData', taskData)
const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (e) => {
    dispatch(saveTaskData(taskData))
    setOpen(false);
  };
  const handleChange = (e, type) => {
    setTaskData({...taskData, [type]: e.target.value, id: uuidv4() })
  }
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD TASK
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>TASK</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add Task data from here
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            label="Name of the Task"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e,'name')}
          />
          <TextField
            margin="dense"
            required
            id="description"
            label="description Address"
            type="description"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e,'desc')}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={!(taskData.name && taskData.desc)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;