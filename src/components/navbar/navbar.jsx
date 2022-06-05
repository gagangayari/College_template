import React from "react";
import './navbar.css'
import {Link} from 'react-router-dom';
// import Administration from "./pages/Administration";


function Navbar(props){
    return (

        <div className="navbar">

            <ul className="navbar-comp">
                
                <Link to="/" className="logo-sec">
                    <img src="Images/logo.jpeg" alt="" height={40} width={60} />
                </Link>
                <Link to="/dept">Departments</Link>
                <Link to="/admins">Administration</Link>
                <Link to="/acad">Academics</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/login">Login</Link>
                <Link to="/counter">Counter</Link>

                

            </ul>

        </div>
    );

}

export default Navbar;