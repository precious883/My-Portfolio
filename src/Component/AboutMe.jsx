import React from 'react';
import { useNavigate } from "react-router-dom";
import './AboutMe.css';
import Logo1 from'../pics/separatorBlack.png';
import Logo2 from '../pics/Development.png';
import Logo3 from '../pics/Design.png'
import Logo4 from '../pics/maintenance.png'
import HomePage from './HomePage';

const AboutMe = ()=> {
    const navigate = useNavigate ();
    return (
        <div className='MyBio'>
            <div className='general'>
                    <h1 > ABOUT ME</h1>
                    <p>
                        If you use this site regularly and would like to help keep the site on the Internet, <br/>
                        please consider donating a small sum to help  pay  
                    </p>
                    <div className='explore'>
                        <span className="line"></span>
                        <h3 className='explore-text'>
                            EXPLORE      
                        </h3>
                       <span className="line"></span>
                    
                    </div>
                    <img src= {Logo1} alt='separator '/>
                    
            </div>
            <div className='Text1'>
                <img src={Logo4} alt='DevLogo'/>
                <h2>DEVELOPMENT</h2>
                <p>
                    It is a long established fact that a reader will be distracted by<br/>
                    the readable content of a page when looking at its layout.
                </p>

            </div>
            <div className='Text2'>
                <img src={Logo3} alt='DesLogo'/>
                <h2>DESIGN</h2>
                <p>
                    It is a long established fact that a reader will be distracted by<br/>
                    the readable content of a page when looking at its layout.
                </p>
            </div>
            <div className='Text3'>
                <img src={Logo2} alt='MainLogo'/>
                <h2>MAINTENANCE</h2>
                <p>
                    It is a long established fact that a reader will be distracted by<br/>
                    the readable content of a page when looking at its layout.
                </p>
            </div>
            <div className='lastimg'>
              <img src={Logo1} alt='footerLogo' className='footerLogo' />
              <button  onClick={()=> navigate("/HomePage")}   className='backtrack'>Back</button>
            </div>
            
        </div>
    );
}

export default AboutMe;