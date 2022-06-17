import React from "react";
import './home.css'
import Notify from './notifications'
import FirstSec from './firstsec'
import Footer from "../../components/footer/footer";
import About from "./Aboutsection";
// import {img1,img2,img3} from '../../Images'

function Carousel(){
    return(
        <div id="carouselSlides" className="carousel slide custom-carousel"  data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active" style={{background:"red"}}>
                    <img src="Images/demo2.jpeg" className="d-block custom-carousel-img" alt="Img" />
                </div>
                <div className="carousel-item" style={{background:"blue"}}>
                    <img src="Images/demo3.jpeg" className="custom-carousel-img" alt="" />

                </div>
                <div className="carousel-item" style={{background:"green"}}>
                    <img src="Images/demo4.jpeg" className="custom-carousel-img" alt="" />

                </div>
            </div>

        </div>
    )
}

function Home(){
    return (
        <div className="main-body">
            {/* <div className="slide-img"></div> */}
            <Carousel/>
            {/* <img src="Images/demo1.jpeg" alt="" className="img-fluid" height={200} width={100}/> */}
            <About></About>
            <FirstSec></FirstSec>
            

            <div><Notify/></div>   
            <Footer></Footer>
        </div>

    )
}

export default Home;
