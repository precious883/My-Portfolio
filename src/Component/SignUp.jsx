import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import InputField from './InputField';





const SignUp = () => {

  const [formValue, setFormValue] = useState ({
    name:'',
    email:'',
    password:'',
    postcode:'',
    phoneNumber:''
    

  });

  const handleInputchange = (e) =>{
    const {name,value} = e.target;
    setFormValue({...formValue,[name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formValue)

    localStorage.setItem('user', JSON.stringify(formValue));
    alert("Sign up Successful");
    navigate('/')
  }

   const navigate = useNavigate ();
    return (
      <form onSubmit={handleSubmit}>
        <div className='SignUp-body'>
        <h1 className='ACCT'>Account Registration</h1>
        <p className='separator1'><span>Fill Your Details</span></p>

        <div >
          <input
          type= "text"
          placeholder= "Full Name"
          name='name'
          value={formValue.Name}
          onChange={handleInputchange}
          className='input-field2' required/>
          
          <br/>

          <input
          type= "email"
          name='email'
          placeholder= "Email Address"
          value={formValue.email}
          onChange={handleInputchange}
          className='input-field2' required/>
          <br/>

          <input
          type= "Password"
          name='password'
          placeholder= "Password"
          value={formValue.password}
          onChange={handleInputchange}
          className='input-field2' required/>
          <br/>

          <input
          type= "text"
          name= "phoneNumber"
          placeholder= "Phone Number"
          value={formValue.phoneNumber}
          onChange={handleInputchange}
          className='input-field2' required/>
          <br/>

          <input
          type= "text"
          name='postcode'
          placeholder= "Post Code"
          value={formValue.postcode}
          onChange={handleInputchange}
          className='input-field2' required/>

         
        </div>
        <div>
                <label htmlFor="country">Choose a country:</label>
                <select id="country" name="country">
                  <option value="Nigeria">Nigeria</option>
                  <option value="USA">USA</option>
                  <option value="CANADA">CANADA</option>
                  <option value="RUSSIA">RUSSIA</option>
                  <option value="UK">UK</option>
                  <option value="CHINA">CHINA</option>
                  
                </select>
              
                
       </div>
              <button className='SignUp-Button'>SignUp</button>

              <p className='signup-text'>
                Already Have an  Account
              </p>
              <button onClick={() => navigate ("/")}>SignIn</button>
              </div>
    </form>
        
    );
}

export default SignUp;