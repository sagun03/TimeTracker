import React from 'react';
import { useSelector } from 'react-redux';
import AuthorsForm from './AuthorsForm';

const Authors = () => {
  const authorData = useSelector((state) => state.author?.authorData)
  console.log('authorData', authorData)
  return (
    <div style={{display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
  }}>
        <AuthorsForm/>
       {" "}
         {authorData && authorData.length && authorData.map(({ name, email}) => <div>NAME: {name} <br/> EMAIL: {email}</div>)}
    </div>
  )
}

export default Authors;