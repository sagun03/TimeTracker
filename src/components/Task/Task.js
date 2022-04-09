import React from 'react';
import { useSelector } from 'react-redux';
import TaskForm from './TaskForm';

const Task = () => {
  const taskData = useSelector((state) => state.task?.taskData)
  console.log('taskData', taskData)
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
  }}>
        <TaskForm/>
       {" "}
         {taskData && taskData.length && taskData.map(({ name, desc}) => <div>NAME: {name} <br/> DESCRIPTION: {desc}</div>)}
    </div>
  )
}

export default Task;