import React, { Component } from "react";
import "./firstsec.css"

const message= "Hey Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

class First_sec extends Component{
    render(){
        return(
            <div className="Firstpart">
                    <h2 >Message from Principal</h2>
                    <p > {message}</p>                
                    <img src="Images/194161004.jpeg" alt="" height={60} width={60}/>

            </div>
        )
    };

}

export default First_sec;