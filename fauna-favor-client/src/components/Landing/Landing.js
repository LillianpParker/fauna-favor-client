import React, {Component } from 'react'
import "./Landing.css"
import Navbar from '../Navbar/Navbar.js'

function Landing(props) {
    return (
        <div class="container">
            <div>
                <header className="title">
                    <h1>Fauna Favor</h1>
                </header>
            </div>
            <ul class="cb-slideshow">
                <li><span>Image 01</span><div><h3>·Kakapo·</h3></div></li>
                <li><span>Image 02</span><div><h3>·Ploushare·Tortoise·</h3></div></li>
                <li><span>Image 03</span><div><h3>·Vaquita·</h3></div></li>
                <li><span>Image 04</span><div><h3>·Orinoco·Crocodile·</h3></div></li>
                <li><span>Image 05</span><div><h3>·Spix·Macaw·</h3></div></li>
                <li><span>Image 06</span><div><h3>·Saola·</h3></div></li>
            </ul>
        </div>
    )
}

export default Landing