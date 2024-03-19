import NavBar from './Components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, HashRouter, Route, Routes } from "react-router-dom";
import AllData from './Components/allData';
import CreateAccount from './Components/CreateAccount';
import Deposit from './Components/deposit';
import Home from './Components/home';
import Login from './Components/logIn';
import Withdraw from './Components/withdraw';
import {createContext } from "react";
import './App.css';


export const UserContext = createContext(null);


function App () {

  
    return  (
        <div >
        <NavBar />
        <div className='body' >
          <UserContext.Provider value={{users: [{id:0, name:'abel', lastName:'Becerra', email:'abel@mit.edu', password:'secret', balance:100}]}}>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/CreateAccount/" element={ <CreateAccount /> }/>
            <Route path="/login/" element={ <Login /> }/>
            <Route path="/deposit/" element={ <Deposit /> }/>
            <Route path="/withdraw/" element={ <Withdraw /> }/>
            <Route path="/alldata/" element={ <AllData /> }/>
          </Routes>
          </UserContext.Provider>
        </div>
        
        
        </div>
    )

}

export default App;