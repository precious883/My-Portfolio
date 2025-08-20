import React from "react";



const SocialLogin = () => {
    return (
      <div>
        <div><h2 className='form-title'>Login with</h2></div>
        <div className='social-login'>
        <button className='social-button'>
        <img src={require ('../pics/facebook.png')} 
        alt='facebook' className='social-icon'/>
        Facebook
        </button>
      <button className='social-button'>
    <img src={require ('../pics/Google.png')} 
      alt='Google' className='social-icon'/> 
      Google</button>
      </div>
      <p className='separator'><span>OR</span></p>
      </div>
    )
}

export default SocialLogin