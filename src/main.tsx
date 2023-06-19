import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Ladingpage } from './component/LadingPage/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Ladingpage />
  </React.StrictMode>,
)
