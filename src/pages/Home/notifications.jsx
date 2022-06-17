import React, { Component } from "react";
// import "./notification.css"

function Date(props){
    return (
        <div className="row p-2">
            <div className="col-2 bg-warning text-center h-25" >
                <p >{props.date}</p>
                <p >{props.year}</p>
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
            <div className="notification">
                <div className="row">
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
                        <h2>Events</h2>
                        <Date date="23 Jan" year="2022" desc="A two-day symposium on Socio-Technological Aspects of Seismic Disaster and its Mitigation"/>
                        <Date date="30 March" year="2022" desc="A two-day symposium on Socio-Technological Aspects of Seismic Disaster and its Mitigation"/>

                        
                    </div>


                </div>
                
            </div>
            )
        
    };
}

export default Notify;