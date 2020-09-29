import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AnimalList from './components/AnimalList/AnimalList.js'
import Landing from './components/Landing/Landing.js'
import Navbar from './components/Navbar/Navbar.js'
import './App.css';

function App () {
//   const [formInputs, updateFormInputs] = useState ({

//   });
//   const [animals, setAnimals] = useState([])

//   const getAnimals = async () => {
//     try {
//       const response = await fetch('http://localhost3001')
//       const data = await response.json()
//       console.log(data)
//       setAnimals(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
    return (
      <div className="App">
        <Navbar/>
        <Landing/>
      </div>
    );
}

export default App;
