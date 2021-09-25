export default function validateInfo(values) {
    let errors = {};
  
    if (!values.firstname.trim()) {
      errors.firstname = 'Firstname is mandatory';
    }else if(values.firstname.length<3){
        errors.firstname = 'Minimum 3 characters are required';
    }else if(values.firstname.length>=20){
        errors.firstname = 'Maximum 20 characters are allowed';
    }
    else if(!values.firstname.match(/^[a-zA-Z]+$/)){
        console.log("hitting ")
        errors.firstname = 'Only alphabets are allowed';
    }

    // code for lastname validation
    if (!values.lastname.trim()) {
        errors.lastname = '';
      }else if(values.lastname.length>=20){
          errors.lastname = 'Maximum 20 characters are allowed';
      }
      else if(!values.lastname.match(/^[a-zA-Z]+$/)){
          errors.lastname = 'Only alphabets are allowed';
      }

      if(!values.gender){
        errors.gender = "this field is mandatory"
    }

    if (!values.email) {
        errors.email = 'Email is mandatory';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

      if(!values.dob){
        errors.dob = "this field is mandatory"
    }

    return errors;
  }