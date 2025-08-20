import React from 'react';
import { useNavigate } from "react-router-dom";
import './Portfolio.css';
import HeaderFoto from '../Logo/part1.png'
import pic from '../Logo/Project1.png'
import pic2 from '../Logo/project2.png'
import pic3 from '../Logo/Project3.png'
import pic4 from '../Logo/Project4.png'
import pic5 from '../Logo/Project5.png'

const Portfolio = () => {
    const navigate = useNavigate ();
    return (
        <div className='FullPort'>
            <div className='Part1'
            style={{ backgroundImage: `url(${HeaderFoto})` }}>
                <div className='general'>
                    <h1>PORTFOLIO</h1>
                </div>
            </div>
            <div className='mid-list'>
                <ul>
                    <li><a href='https://www.linkedin.com/in/precious-agbabuwe-bb7066193/recent-activity/all/'>All</a></li>
                    <li><a href='https://github.com/precious883'>CODED</a></li>
                    <li><a href='https://www.figma.com/files/team/1480648544432516937/drafts?fuid=1480648542438895540'>DESIGN</a></li>
                </ul>
            </div>
            <div className='Row1'>
                <ul>
                    <li><img src={pic}/></li>
                    <li><img src={pic2}/><span></span></li>
                    <li><img src={pic3} /></li>
                </ul>
            </div>

            <div className='Row2'>
                <ul>
                    <li><img src={pic4} /></li>
                    <li><img src={pic5} /></li>
                    <li><img src={pic} /></li>
                </ul>
            </div>
            <div className='lastFooter'>
                <h2 > <a onClick={()=> navigate("/HomePage")}>And many more to come !</a></h2>
            </div>
            
        </div>
    );
}

export default Portfolio;