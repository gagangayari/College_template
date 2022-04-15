import React from "react";
import './home.css'
import Notify from './notifications'
// import {img1,img2,img3} from '../Images'

function Home(){
    return (
        <div className="main-body">
            <h1>This is home</h1>

            <div><Notify/></div>   
        </div>

    )
}

export default Home;
