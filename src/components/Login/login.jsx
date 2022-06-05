import React from "react";
// import ReactDOM from 'react-dom';
import './Login.css'


function onclickButton(e){
    // console.log("clicked",e.target.id);
    var value= document.getElementById('userid').value;
    console.log("value ",value)
}

function Login(props){
    return (
        <div className="c1">
            <h1>Login</h1>
            <div className="c2">
                <form >
                    <input type="button" onClick={onclickButton} className="btn" id="googlesigin" value="Sign in with Google"/>  <br />
                    <input type="button" className="btn" value="Sign in with Facebook" /> <br />
                    <label >Username</label>
                    <input type="text" className="textInput"  id="userid" placeholder="User Id" name="userid"/>  <br />
                    <label >Password</label>
                    
                    <input type="password" /><br />
                    <input type="button" onClick={onclickButton} className="btn"  name="Next" id="next" />  <br />
                </form>
            </div>

        </div>

    );
    

}


export default Login;