import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    return (
        <div>
        <div id="navbar"> 
        <ul> 
            <li><a href="/">Home</a></li> 
            <li><a href="/animals">Animals</a></li> 
            <li><a href="/signup">Sign Up</a></li> 
            <li><a href="/signin">Sign In</a></li> 
        </ul> 
        </div> 
        <div>
        <hr className="line"/>  
        </div>
        </div>
    )}

export default Navbar

