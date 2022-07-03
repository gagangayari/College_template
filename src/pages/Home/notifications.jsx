import React, { Component } from "react";
// import "./notification.css"

function Date(props){
    return (
        <div className="row p-2">
            <div className="bg-warning text-wrap text-center" style={{width:"90px" , height:"60px",borderRadius:"8px"}}>
                <p className="fs-9 m-0 fw-semibold ">{props.date}</p>
                <p className="fs-9 m-0 fst-normal">{props.year}</p>

            </div>
            <div className="col">
                <a href="">{props.desc} </a>
            </div>
        </div>
        
    )
}

class Notify extends Component {
    render (){
        return (
            <div className="notification p-2"  >
                <div className="row" style={{backgroundColor : "#9BA3EB"}}>
                    <div className="col">
                        <ul className="nav nav-pills boot-tabs">
                            <li className="active">
                                <a href="" data-toggle="tab" aria-expanded="true"> 
                                    <h4>
                                        <i className="fa-solid fa-bullhorn"></i>
                                        Announcement
                                    </h4>
                                </a>
                            </li>
                            <li>
                                <a href="" data-toggle='' aria-expanded='true'> 
                                    <h4>
                                        <i className="fa-solid fa-bars-progress"></i>
                                        Recruitment
                                    </h4>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="col">
                        <h2 className="text-center">Events</h2>
                        <Date date="23 Jan" year="2022" desc="A two-day symposium on Socio-Technological Aspects of Seismic Disaster and its Mitigation"/>
                        <Date date="30 Mar" year="2022" desc="A two-day symposium on Socio-Technological Aspects of Seismic Disaster and its Mitigation"/>

                        
                    </div>


                </div>
                
            </div>
            )
        
    };
}

export default Notify;