import React from 'react';
import NavBar from './Navbar';
import './HomePage.css';
import Logo from'../pics/logo.png';
import Social1 from '../pics/Vector1.png'
import Social2 from '../pics/Vector2.png'
import Social3 from '../pics/Vector3.png'
import ProPic from '../pics/picture.png'



const HomePage = () => {

    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user){ 
        return <h2> Access denield. Please LogIn.</h2>
}

    return (
        <div className='Container'>
            <div className='HomePage'>
                <div> 
                    <NavBar/>
                </div>
                <div>
                    <img src={Logo} alt='Logo' className='logo-icon'/>
                </div>
                <div className='text'>
                    <h2 >Hi, I am</h2>
                    <h1>Thomasz Gajda</h1>
                    <p>Front-end Deveeloper/ UI Designer</p>
                </div>
                <div className='image-list'>
                
                    <button><img src={Social3} alt='Social logo' className='vector'/></button>
                    <button><img src={Social2} alt='Social logo'  className='vector'/></button>
                    <button><img src={Social1} alt='Social logo'  className='vector'/></button>
                </div>
                <div className='CliPic'>
                    <img src={ProPic} alt='Client Profile picture'/>
                </div>
                <div className='Empty-div'>
                    fsdgrgherjtjtjtje
                </div>
                <div className='footer'>
                    <h3>IT BERRIES</h3>
                    
                    <span>
                        It is a long established fact that a reader will be distracted  by the readable content of a page when looking at its layout.<br/>
                        The point of using Lorem Ipsum is that it has a more-or-less  normal distribution of letters, as opposed to using 'Content here, <br/>
                        content here', making it look like readable English.
                    </span>

                    <h5>
                       <a href="">|  READ MORE  |</a> 
                    </h5>


                </div>
                 
            </div>
                
                 
            
        
        </div>
    );
}

export default HomePage;