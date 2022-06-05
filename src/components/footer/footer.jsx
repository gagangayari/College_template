import React from "react";
import {Quicklinks,Implinks,contact} from './links'
import './footer.css'


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

function dispAddress(props){
    return(
        <div>
            <h2>Contacts</h2>
        </div>
    )
}

function Footer(props){
    return (
        <div className="link-section">
            <ul>
                <li>{Quicklinks.map(dispLinks)}</li>
                <li>{Implinks.map(dispLinks)}</li>
                <li > {dispAddress}</li>
            </ul>
        </div>
    );

}

export default Footer;