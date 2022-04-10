import React from 'react';
import { useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import Table from '../Table';

const Task = () => {
  const taskData = useSelector((state) => state.task?.taskData)
  console.log('taskData', taskData)
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
  }}>
        <TaskForm/>
       {" "}
       <Table rowData={taskData} headCells={[{label: 'Name'}, { label: 'Description'}]}/>
    </div>
  )
}

export default Task;