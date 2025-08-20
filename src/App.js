import React from 'react';
import SocialLogin from './Component/SocialLogin';
import InputField from './Component/InputField';
import SignUp from './Component/SignUp';
import Profile from './Component/Contact';
import AboutMe from './Component/AboutMe';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Component/HomePage';
import ProtectedRoutes from './Component/ProtectedRoutes';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';




const Home = () => {
  return (
    <div className='login-container'>
      <SocialLogin/>
      <InputField />
      
    </div>
  
  );
};
const App =()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route element={<ProtectedRoutes/>}>
            <Route path="/HomePage" element={<HomePage/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/Contact" element={<Contact/>} />
        
        </Route>
        
      </Routes>

    </Router>
  )
}



export default App;