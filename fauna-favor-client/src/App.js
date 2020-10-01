import React, { useState, useEffect, Link } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AnimalList from './components/AnimalList/AnimalList.js'
import Landing from './components/Landing/Landing.js'
import Navbar from './components/Navbar/Navbar.js'
import SignInForm from './components/SignInForm/SignInForm.js'
import SignUpForm from './components/SignUpForm/SignUpForm.js'
import './App.css';


function App() {
  //   const [formInputs, updateFormInputs] = useState ({

  //   });
  const [animals, setAnimals] = useState([])

  const getAnimals = async () => {
    try {
      const response = await fetch('http://localhost:3000/animals')
      const data = await response.json()
      console.log(data)
      setAnimals([data])
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(
    () => {
      (
        async function () {
          await getAnimals();
        }
      )()
    }, [])
  return (
    <Router>
      <div className="App">
        <Navbar
        // isLoggedIn={isLoggedIn}
        />
        {/* <div className="body">
        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOutForm 
                isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} 
                />
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          /> */}
        <Route
          exact path="/"
          component={Landing}
        />
        <Route
          path="/animals"
          render={() => {
            return (
              <AnimalList animals={animals}
              />
              )
            }}
          />
        <Route
          path="/signup"
          component={SignUpForm}
        />
        <Route
          path="/signin"
          component={SignInForm}
        />
        {/* </Switch> */}
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
