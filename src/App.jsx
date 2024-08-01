import { useState } from 'react'
import React, { Component } from 'react';
import './App.css'
import Home from './Pages/Home'
import News from './News';
import NavBar from './NavBar';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route, Routes
} from "react-router-dom"; 



export default class App extends Component {
  render() {
    return (
      <div className='App'>
          <NavBar/>
    <Routes>
        <Route path= "/" element = {<News key="general" category="sports"/>}/>
        <Route path= "sports" element = {<News key="sports" category = "sports"/>}/>
        <Route path= "business" element = {<News key="business" category = "business"/>}/>
        <Route path= "enter" element = {<News key="enter" category = "entertainment"/>}/>
    </Routes>
  </div>
    )
  }
}

