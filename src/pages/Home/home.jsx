import React from "react";
import './home.css'
import Notify from './notifications'
import First_sec from './firstsec'
// import {img1,img2,img3} from '../Images'

function Home(){
    return (
        <div className="main-body">
            <h1>This is home</h1>

            <div ><First_sec/></div>

            <div><Notify/></div>   
        </div>

    )
}

export default Home;
