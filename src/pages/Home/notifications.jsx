import React, { Component } from "react";
import "./notification.css"

class Notify extends Component{
    render (){
        return (
            <div className="notification">
                <ul>
                    <li>
                        <a href="" data-toggle="" aria-expanded="true"> 
                            <h3>
                                <i class="fa-solid fa-bullhorn"></i>
                                Announcement
                            </h3>
                        </a>
                    </li>
                    <li>
                        <a href="" data-toggle='' aria-expanded='true'> 
                            <h3>
                                <i class="fa-solid fa-bars-progress"></i>
                                Recruitment
                            </h3>
                        </a>
                    </li>
                </ul>
            </div>
            )
        
    };
}

export default Notify;