import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import Toggle from './components/Toggle.js'
import BB from './components/BB.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <Toggle />
    < BB />
  </StrictMode>
)
