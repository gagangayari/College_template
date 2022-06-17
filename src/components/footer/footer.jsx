import React from "react";
import {Quicklinks,Implinks,contact} from './links'
// import './footer.css'


function dispLinks(props){
    return(
        <div className="indv-link">
            <h2>{props.id}</h2>
            <hr />
            {props.links.map((link)=>{
                return (
                    <h5>{link}</h5>
                )
            }

            )}

        </div>
    );
}



function Footer(props){
    return (
        <div >
            <ul className="row">
                <li className="col">{Quicklinks.map(dispLinks)}</li>
                <li className="col">{Implinks.map(dispLinks)}</li>
                <li className="col">
                        <h2>Contact</h2>
                        <hr />
                        <h5>Bhergaon, Udalguri</h5>
                        <h5>PIN 784522</h5>
                        <h5>Contact: 0000000000</h5>
                </li>
            </ul>
        </div>
    );

}

export default Footer;