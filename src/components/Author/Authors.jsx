import React from 'react';
import { useSelector } from 'react-redux';
import AuthorsForm from './AuthorsForm';
import Table from '../Table';
import { deleteAuthorData } from '../../reducers/author/authorAction';

const Authors = ({ zIndex }) => {
  const authorData = useSelector((state) => state.author?.authorData)
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      zIndex: zIndex,
  }}>
        <AuthorsForm/>
       {" "}
       {!!authorData?.length && <Table deleteAction={deleteAuthorData} rowData={authorData} headCells={[{label: 'Name'}, { label: 'Email'}]}/>}
    </div>
  )
}

export default Authors;