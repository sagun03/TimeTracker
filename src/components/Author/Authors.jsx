import React from 'react';
import { useSelector } from 'react-redux';
import AuthorsForm from './AuthorsForm';
import Table from '../Table';

const Authors = () => {
  const authorData = useSelector((state) => state.author?.authorData)
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
  }}>
        <AuthorsForm/>
       {" "}
       <Table rowData={authorData} headCells={[{label: 'Name'}, { label: 'Email'}]}/>
    </div>
  )
}

export default Authors;