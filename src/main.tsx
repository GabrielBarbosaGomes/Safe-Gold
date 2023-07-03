import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Ladingpage } from './Pages/LadingPage/index.tsx'
import { Home } from './Pages/Home/index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CompraDoMes } from './Pages/CompraDoMes/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ladingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compramensal" element={<CompraDoMes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
