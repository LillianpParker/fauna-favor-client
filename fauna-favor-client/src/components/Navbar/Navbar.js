import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    let navBarItems = [
        <div>
            <ul>
                <li key={1}>
                    <a className="menu" href='/landing'>Home</a>
                </li>
                <li key={2}>
                    <a className="menu" href='/animallist'>Animals</a>
                </li>
            </ul>
        </div>
    ]
    return (
        <div className="Nav">
            <nav>
                <ul className="NavBar"> {navBarItems} 
                </ul>
            </nav>
        </div>
    )}

export default Navbar

