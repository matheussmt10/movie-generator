import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ContainerGenerator } from './components/Section'



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
