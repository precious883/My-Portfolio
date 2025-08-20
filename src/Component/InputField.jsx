import React from 'react';
import { useNavigate } from "react-router-dom";
import SignUp from './SignUp';
import { useState } from "react";
import HomePage from './HomePage';

const InputField = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate = useNavigate ();

  const handleLogin = (e) => {
    e.preventDefault ();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if( storedUser && storedUser.email === email && storedUser.password === password){
      alert('Login Successful')
      navigate('/HomePage')
      }else{
        alert('Invalid credentials')
        navigate('/SignUp')
    }
  }
    return (
        <>
        <form onSubmit={handleLogin} className='login-form'>
        <div className='input-wrapper'>
          <input
          type= "email"
          placeholder= "Email Address"
          className='input-field' 
          value={email}
          onChange ={(e) => setEmail(e.target.value)} required />

          <input
          type= "Password"
          placeholder= "Password"
          className='input-field' 
           value={password}
          onChange ={(e) => setPassword(e.target.value)} required
          />
        </div>
         <a href='#' className='forgot-pass-Link'>Forgot Password?</a>
      <button className='login-Button' onClick={() => navigate("/HomePage")}>Login</button>

       
      </form>
      <p className='signup-text'>Don't have an Account?
           <button onClick={() => navigate ("/SignUp") }>SignUp</button>
      </p>
        </>
        
    );
}

export default InputField;