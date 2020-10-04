import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navigation from './components/shared/Navigation';
import Landing from './components/landing/Landing';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import AnimalList from './components/animals/AnimalList'
import FavoriteAnimal from './components/favorites/FavoriteAnimal'
import './App.css';

export default function App() {
  const [animals, setAnimals] = useState([])
  const getAnimals = async () => {
    try {
      const response = await fetch('https://fauna-favor-api.herokuapp.com/animals')
      const data = await response.json()
      setAnimals([data])
    } catch (error) {
      console.error(error)
    }
  }


  const [search, setSearch] = useState('')

  const handleKeyDown = async(event) => {
    if (event.key === 'Enter') {
      try {
        const response = await fetch(`https://fauna-favor-api.herokuapp.com/animals/search/${search}`)
        const data = await response.json()
        console.log(data)
        setAnimals(data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const searchOnChange = (event) => {
    setSearch(event.target.value)
  }

  const favouriteAnimal = (event) => {
    // get the animal the user favourited
    // send POST to favourites route in backend
  }


  return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/landing" exact component={Landing} />
        <Route
          path="/login"
          render={() => <LoginPage config={config} />}
        />
        <Route path="/implicit/callback" component={ImplicitCallback} />
        <Route path="/register" component={RegistrationForm} />
        <Route path="/animals" render={() => (
          <div>
            <input class="search" type="text" placeholder="Search for an animal here" onKeyDown={handleKeyDown} value={search} onChange={searchOnChange}></input>
            <button class="randomAnimal" onClick={getAnimals}>Give me a Random Animal!</button>
            <AnimalList animals={animals}
            />
          </div>
        )} />
        <Route exact path="/favorites" component={FavoriteAnimal}/>
        {/* <SecureRoute path="/animals" component={AnimalList} /> */}
      </main>
    </div>
  );
}