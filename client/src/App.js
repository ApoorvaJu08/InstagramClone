import React from 'react';
import NavBar from './components/Navbar';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import SignIn from './components/screens/SignIn';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/login">
        <SignIn/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
    </BrowserRouter>
  );
}

export default App;