import React,{useState} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
// import './Form.css';

const FormSignup = ({ states,submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

    return (
    <div>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         User Registration
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstname'
            placeholder='Enter your firstname'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>

        {/* // lastname starts here */}
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastname'
            placeholder='Enter your lastname'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Register
        </button>

        
   
      </form>
    </div>
  );
};

export default FormSignup;