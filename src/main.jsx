import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import AuthProvaider from './Provider/AuthProvaider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
      <Router></Router>
    </AuthProvaider>
  </StrictMode>
)
