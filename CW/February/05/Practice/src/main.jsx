import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import Hello from './components/Hello.jsx'
import Animal from './components/Animal.jsx'
import Fruits from './components/Fruits.jsx'
import Event from './components/event.jsx'






createRoot(document.getElementById('root')).render(
    <>

        <Event/>

    </>


)
