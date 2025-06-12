import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";

import App from './App/App.jsx'

import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </StrictMode>,
)
