import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Header/>
    <Navbar/>
  </React.StrictMode>
)
