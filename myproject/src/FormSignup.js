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
        
        {/* gender  */}
        <div className='form-inputs'>
        <label className='form-label'>Gender</label>
        <div className="form-label">Male</div>
        <input
            className='form-input'
            type='radio'
            name='gender'
            value="Male"
            onChange={handleChange}
        />
        <div className="form-label">Female</div>
        <input
            className='form-input'
            type='radio'
            name='gender'
            value="Female"
            onChange={handleChange}
        />
        {errors.gender && <p>{errors.gender}</p>}
        </div>

        {/* email */}
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* DOB */}
        <div className='form-inputs'>
          <label className='form-label'>Date of birth</label>
          <input
            className='form-input'
            type='date'
            name='dob'
            placeholder='Enter your DOB'
            value={values.dob}
            onChange={handleChange}
          />
          {errors.dob && <p>{errors.dob}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Register
        </button>

      </form>
    </div>
  );
};

export default FormSignup;