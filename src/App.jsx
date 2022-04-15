import React from "react";
import  ReactDOM  from "react-dom";

import Login from './components/Login/login'
import Navbar from './components/navbar/navbar'
import Home from "./pages/Home/home";
import Administration from "./pages/Administration";
import Departments from "./pages/departments";


import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";



function App(){
    return (
        
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/login" element={<Login/>} />
                <Route path="/admins" element={<Administration/>} />
                <Route path="/dept" element={<Departments />} />



            </Routes>

            
        </Router>
    
    );
}
export default App;