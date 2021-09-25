import React from 'react';
// import './Form.css';
import useForm from './useForm';

const FormSuccess = () => {
    const {values}=useForm();
    console.log(values);
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Your Details !</h1>
      
    </div>
  );
};

export default FormSuccess;