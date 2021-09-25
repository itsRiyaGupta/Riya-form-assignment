import React, { useState } from 'react';
// import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const states = [
    {
      id: 1,
      name: "Andhra Pradesh",
      districts: [
        {
          id: 1001,
          name: "Anantpur ",
        },
        {
          id: 1002,
          name: "Chittoor",
        },
        {
          id: 1003,
          name: "Nellore",
        },
        {
          id: 1004,
          name: "Prakasam ",
        },
      ],
    },

    {
      id: 2,
      name: "Arunachal Pradesh",
      districts: [
        {
          id: 2001,
          name: "Anjaw",
        },
        {
          id: 2002,
          name: "Changlang",
        },
        {
          id: 2003,
          name: "East Siang",
        },
        {
          id: 2004,
          name: "Tawang",
        },
        {
          id: 2005,
          name: "West Kameng",
        },
      ],
    },

    {
      id: 3,
      name: "Assam",
      districts: [
        {
          id: 3001,
          name: "Baksa",
        },
        {
          id: 3002,
          name: "Barpeta",
        },
        {
          id: 3003,
          name: "Bongaigaon",
        },
        {
          id: 3004,
          name: "Cachar ",
        },
        {
          id: 3005,
          name: "Chirang",
        },
        {
          id: 3006,
          name: "Darrang",
        },
        {
          id: 3007,
          name: "Dhemaji",
        },
      ]
    },
];

const Form = () => {
    
        const [isSubmitted, setIsSubmitted] = useState(false);
      
        function submitForm() {
          setIsSubmitted(true);
        }
  return (
    <>
      <div className='form-container'> 
          {/* <FormSignup states={states}/> */}
          {!isSubmitted ? (
          <FormSignup submitForm={submitForm} states={states}/>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;