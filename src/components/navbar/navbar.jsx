import React from "react";
import './navbar.css'
import {Link} from 'react-router-dom';
// import Administration from "./pages/Administration";


function Navbar(){
    return (

        <div className="navbar">
            <ul className="navbar-comp">
                <Link to="/">Home</Link>
                <Link to="/dept">Departments</Link>
                <Link to="/admins">Administration</Link>
                <Link to="/acad">Academics</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/login">Login</Link>

                

            </ul>

        </div>
    );

}

export default Navbar;