import './App.css';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import {useState, useEffect} from 'react';
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
import Paleta from '/Paleta'
import Footer from './Footer'

function App() {
  
  return (
  <>
    <Header />
<div className = "Container">
  <aside>
     <Aside />
  </aside>

    <Paleta />
   
    <Main />
</div>

    <Footer />

    </>

    //aqui meto los componentes y las rutas
  );
}

export default App;
