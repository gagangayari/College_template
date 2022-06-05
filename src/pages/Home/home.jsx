import React from "react";
import './home.css'
import Notify from './notifications'
import First_sec from './firstsec'
import Footer from "../../components/footer/footer";
// import {img1,img2,img3} from '../Images'

function Home(){
    return (
        <div className="main-body">
            <div className="slide-img"></div>

            <div ><First_sec/></div>

            {/* <div><Notify/></div>    */}
            <Footer></Footer>
        </div>

    )
}

export default Home;
