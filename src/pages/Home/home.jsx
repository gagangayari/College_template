import React from "react";
import './home.css'
import Notify from './notifications'
import FirstSec from './firstsec'
import Footer from "../../components/footer/footer";
import About from "./Aboutsection";
// import {img1,img2,img3} from '../Images'

function Home(){
    return (
        <div className="main-body">
            <div className="slide-img"></div>
            <About></About>
            <FirstSec></FirstSec>
            

            <div><Notify/></div>   
            <Footer></Footer>
        </div>

    )
}

export default Home;
