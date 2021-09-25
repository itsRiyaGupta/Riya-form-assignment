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

    return errors;
  }