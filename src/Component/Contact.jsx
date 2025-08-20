import React from 'react';
import './Contact.css'
import Logo1 from'../pics/separatorBlack.png';
import instagram from '../Logo/instagram.png';
import facebook from '../Logo/facebook.png';
import Email from '../Logo/Email.png';
import linkedin from '../Logo/linkedin.png';
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate ();
    return (
        <div className='Contact-Section'>
            <div className='header'>
                <h1>CONTACT</h1>
                <p>
                     If you use this site regularly and would like to help keep the site on the Internet, <br/>
                        please consider donating a small sum to help  pay  
                </p>
                <img src= {Logo1} alt='separator '/>
            </div>

            <div>
                <form className='contact-form'>
                    <input
                      type='Text'
                      name='Full name'
                      placeholder='ENTER YOUR NAME'/>
                    <br/>
                    
                    <input
                      type='Text'
                      name='email'
                      placeholder='ENTER YOUR EMAIL'
                    />
                    <br/>
                    
                    <input
                      type='Text'
                      name='phoneNumber'
                      placeholder='PHONE NUMBER'
                    />
                    <br/>
                    
                    <input
                      type='text'
                      name='Message'
                      placeholder='YOUR MESSAGE'
                    />

                    <button>Sumit</button>
                </form>
                <div className='FINAL'>
                    <h3><a onClick={()=> navigate("/HomePage")}>BACK TO HOME</a></h3>
                    <ul>
                        <li><img src={instagram}/></li>
                        <li><img src={facebook}/></li>
                        <li><img src={Email }/></li>
                        <li><img src={linkedin}/></li>
                    </ul>
                    <p>@2020 Tomasz Gajda All Rights Reserved.</p>
                

                </div>
            </div>
        </div>
    );
}

export default Contact;