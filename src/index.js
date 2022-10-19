import React from 'react' // importation de React
import ReactDOM from 'react-dom/client' // importation de React-Dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './pages/Home' // importation de la page Home
import About from './pages/About' // importation de la page About
import Logement from './pages/Logement' // importation de la page Logement
import Error from './pages/Error' // importation de la page Error

import './styles/main.scss' 

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Logement/:id" element={<Logement />} />
        <Route exact path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
);


