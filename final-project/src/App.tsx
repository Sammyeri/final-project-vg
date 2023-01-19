import React, { useEffect, useState } from 'react';

import './App.css';
import { GameDetails } from './components/gamedetails';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Owned } from './components/OwnedList';
import { WishlistPage } from './components/WishlistPage';
import WishlistContextProvider from "./context/wishlistProvider";
import { SignInPage } from './components/signinpage';
import { Game } from './models/gamedetails';
import { getGameById } from './services/getgamebyid';
import { OwnedPage } from './components/OwnedPage'
import OwnedContextProvider from './context/OwnedListProvider';
import HomePage from './components/homepage';


function App() {
  
  return (
   
    <WishlistContextProvider>
      <OwnedContextProvider>
      
    <div className="App">
      <div className="container">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<SignInPage></SignInPage>}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/owned" element={<OwnedPage />} />
            <Route path="/wish" element={<WishlistPage />} />
            <Route path="/game/:id" element={<GameDetails  ></GameDetails>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
    </OwnedContextProvider>
    </WishlistContextProvider>
    
  )
}

export default App;
