import React from 'react';
import './Skills.css';
import { useNavigate } from "react-router-dom";
import HTML5 from '../Logo/html5.png';
import CSS3 from '../Logo/css3.png';
import JS from '../Logo/javascript.png';
import FIG from '../Logo/figma.png';
import GIT from '../Logo/git.png';
import REACT from '../Logo/react.png';
import SASS from '../Logo/sass.png';
import BOOT from '../Logo/bootstrap.png';
import NJ from  '../Logo/nodejs.png';
import TYPE from '../Logo/typescript.png';
import MYSQL from '../Logo/MySQL.png';
import MON from '../Logo/mongodb.png';
import ENG from '../Logo/english.png';
import SPAIN from '../Logo/spain.png';
import SEMI from '../Logo/c++.png';
import C from '../Logo/c.png';
import HomePage from './HomePage';


function Skills(props) {
    const navigate = useNavigate ();
    return (
        <div className='full-skill'>
            <div className='general'>
                <h1>SKILLS</h1>
            </div>
            <div className='Text1'>
                <h2>USING NOW :</h2>
            </div>
             <div className='DevSkills'>
                <ul>
                    <li><img src={HTML5} alt="HTML5" /><span>HTML5</span></li>
                    <li><img src={CSS3} alt="CSS3" /><span>CSS3</span></li>
                    <li><img src={JS} alt="JavaScript" /><span>JavaScript</span></li>
                    <li><img src={FIG} alt="Figma" /><span>Figma</span></li>
                </ul>
            </div>
            <div className='Dev2'>
                <ul>
                    <li><img src={GIT} alt="Git" /><span>Git</span></li>
                    <li><img src={REACT} alt="React" /><span>React</span></li>
                    <li><img src={SASS} alt="Sass" /><span>Sass</span></li>
                    <li><img src={BOOT} alt="Bootstrap" /><span>Bootstrap</span></li>
                </ul>
            </div>
            
            <div className='Text22'>
               <h2>
                  LEARNING :
               </h2>
                <ul>
                    <li><img src={NJ} alt='NodeJS'/><span>NodeJS</span></li>
                    <li><img src={TYPE} alt='Typescript'/><span>TYPESCRIPT</span></li>
                    <li><img src={MYSQL} alt='MySQL'/><span>MySQL</span></li>
                    <li><img src={MON} alt='MonGODB'/><span>MONGODB</span></li>
                </ul>
            </div>
            <div className='Text33'>
                <h2>OTHER SKILLS :</h2>
                <ul>
                    <li><img src={ENG} alt='English'/><span>ENGLISH</span></li>
                    <li><img src={SPAIN} alt='Spain'/><span>SPAIN</span></li>
                    <li><img src={SEMI} alt='C++'/><span>C++</span></li>
                    <li><img src={C} alt='C'/><span>C</span></li>
                </ul>
            </div>

            <div className='last'>
                          <button  onClick={()=> navigate("/HomePage")}   className='back'>Back</button>
                        </div>
        </div>
    );
}

export default Skills;