import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.addEventListener('DOMContentLoaded', (event) => {
  const hash = window.location.hash;
  if (hash) {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
