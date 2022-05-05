import React, { Component } from "react";
import "./notification.css"

class Notify extends Component{
    render (){
        return (
            <div className="notification">
                <div className="row">
                    <div className="">
                        <ul className="nav nav-pills boot-tabs">
                            <li className="active">
                                <a href="" data-toggle="tab" aria-expanded="true"> 
                                    <h4>
                                        <i class="fa-solid fa-bullhorn"></i>
                                        Announcement
                                    </h4>
                                </a>
                            </li>
                            <li>
                                <a href="" data-toggle='' aria-expanded='true'> 
                                    <h4>
                                        <i class="fa-solid fa-bars-progress"></i>
                                        Recruitment
                                    </h4>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="events">
                        
                    </div>


                </div>
                
            </div>
            )
        
    };
}

export default Notify;