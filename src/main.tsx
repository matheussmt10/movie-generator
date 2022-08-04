import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header/index'
import { Navbar } from './components/Navbar/index'
import { ContainerGenerator } from './components/Section/index'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Header/>
    <div style={{
      display:'flex',
      width: '98vw',
      height: '88vh'
    }}>
    <Navbar/>
    <ContainerGenerator/>
    </div>

  </React.StrictMode>
)
