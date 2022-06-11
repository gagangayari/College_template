import React from "react";
import  ReactDOM  from "react-dom";

import Login from './components/Login/login'
import Navbar from './components/navbar/navbar'
import Home from "./pages/Home/home";
import Administration from "./pages/Administration/Administration";
import Departments from "./pages/Departments/departments";
import Counter from "./pages/counter/counter"
import Academics from "./pages/Academics/academics";
import "./bootstrap-5.2.0-beta1-dist/css/bootstrap.css";


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
                <Route path="contact" element={<h2>Contact</h2>}/>
                <Route path="/counter" element={<Counter/>} />
                <Route path='/acad' element={<Academics/>} />

            </Routes>

            
        </Router>
    
    );
}
export default App;