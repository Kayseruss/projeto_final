import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './templates/Login'
import Home from './templates/Home'
import Singup from './templates/Singup'
import NotFound from './templates/NotFound'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/signup' Component={Singup} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)