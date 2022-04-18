import React from 'react';
import './App.css';


import NavBar from './components/NavBar';
import Authors from './components/Author/Authors';
import { useSelector } from 'react-redux';
import Task from './components/Task/Task';
import Demo from './components/Demo/Demo';

const App = () => {
  const componentToRender = useSelector((state) => state.navigation.componentToRender)
  console.log('componentToRender', componentToRender)
  return (
    <React.Fragment className='flexbox-container'>
      <NavBar className='flexbox-item flexbox-item-1'/>
     {componentToRender === 'Author' && <Authors />}
     {componentToRender === 'Task' && <Task />}
     {componentToRender === 'Demo' && <Demo />}
    </React.Fragment>

  );
}

export default App;
