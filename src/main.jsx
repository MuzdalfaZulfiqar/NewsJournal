import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import BlogPage from './Pages/BlogPage.jsx';


// In the main same as always we will use App 
// render and now wrapped within the BrowserRouter
// step1 and for step 2 go to app 
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)