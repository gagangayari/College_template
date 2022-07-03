import React, { Component } from "react";
// import "./firstsec.css"

const message= "Hey Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Hey Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."





class FirstSec extends Component{
    render(){
        return(
            <div className="container-fluid ">
                <div className="row p-3">
                    <div className="col ms-3">
                        <h2 >Message from Principal</h2>
                        <p > {message}</p>                
                    
                    </div>

                    <div className="col ms-4" >
                        <img src="Images/194161004.jpeg" className="img-fluid img-thumbnail" alt="" height={60} width={200} style={{borderRadius:'90%'}}/>

                    </div>

                </div> 

            </div>
            
        )
    };

}

export default FirstSec;