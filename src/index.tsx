import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Normalize />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
