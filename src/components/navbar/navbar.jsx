import React from "react";
// import './navbar.css'
import {Link} from 'react-router-dom';


function Navbar(props){
    return (

        <nav className="navbar navbar-expand-lg bg-light">

            <Link to="/" className="navbar-brand nav-link">
                <img src="Images/logo.jpeg" alt="" height={40} width={60} />
            </Link> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-collapse" aria-controls="menu-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu-collapse">
                <ul className="navbar-nav ms-auto">
                    
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Administration
                    </a>
                        <ul className="dropdown-menu">
                            <li><a href="" className="dropdown-item">About Us</a></li>
                            <li> <a href="" className="dropdown-item">Governing Body</a></li>
                            <li><a href="" className="dropdown-item">Principal</a></li>
                            <li><a href="" className="dropdown-item">Vice Principal</a></li>

                        </ul>

                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Academics
                    </a>
                        <ul className="dropdown-menu">
                            <li><a href="" className="dropdown-item">Courses</a></li>
                            <li> <a href="" className="dropdown-item">Departments</a></li>
                            <li><a href="" className="dropdown-item">Prospectus</a></li>
                            <li><a href="" className="dropdown-item">Academic Calendar</a></li>

                        </ul>

                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Facilities
                    </a>
                        <ul className="dropdown-menu">
                            <li><a href="" className="dropdown-item">Hostel</a></li>
                            <li> <a href="" className="dropdown-item">Library</a></li>
                            <li><a href="" className="dropdown-item">Sports</a></li>
                            <li><a href="" className="dropdown-item">Canteen </a></li>

                        </ul>

                    </li>
                    {/* <Link to="/acad" className="nav-link active dropdown-toggle">Academics</Link> */}
                    {/* <Link to="/facilities" className="nav-link active dropdown-toggle"> Facilities</Link> */}

                    <Link to="/contact" className="nav-link">Contact us</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    {/* <li><Link to="/counter">Counter</Link></li> */}

                    

                </ul>

            </div>
            
        </nav>
    );

}

export default Navbar;