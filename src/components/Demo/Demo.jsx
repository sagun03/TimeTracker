import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DemoForm from './DemoForm';
import Table from '../Table';
import { deleteDemoData, updateDemoData } from '../../reducers/demo/demoAction';

const Demo = () => {
  const demoData = useSelector((state) => state.demo?.demoData);
  const dispatch = useDispatch();

  const handleTimer = (time, id) => {
    
    dispatch(updateDemoData({time, id}))
  }
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
  }}>
        <DemoForm/>
       {" "}
       {!!demoData.length && <Table handleTimer={handleTimer} deleteAction={deleteDemoData} rowData={demoData} headCells={[{label: 'Name'}, { label: 'Author'}, { label: 'Task'}, { label: 'Timer'}]}/>}
    </div>
  )
}

export default Demo;