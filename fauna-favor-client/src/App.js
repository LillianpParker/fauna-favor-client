import React from 'react';
import Animals from './components/Animal.js'
import './App.css';

function App () {
    return (
      <div className="App">
        <ul class="cb-slideshow">
        <li><span>Image 01</span><div><h3>·Kakapo·</h3></div></li>
            <li><span>Image 02</span><div><h3>·Ploushare·Tortoise·</h3></div></li>
            <li><span>Image 03</span><div><h3>·Vaquita·</h3></div></li>
            <li><span>Image 04</span><div><h3>·Orinoco·Crocodile·</h3></div></li>
            <li><span>Image 05</span><div><h3>·Spix·Macaw·</h3></div></li>
            <li><span>Image 06</span><div><h3>·Saola·</h3></div></li>
        </ul>
      </div>
    );
}

export default App;
