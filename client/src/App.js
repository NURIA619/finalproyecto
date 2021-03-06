import './App.css';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import {useState, useEffect} from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
  
  return (
  <>
    <Header />

    <Main />

    <Footer />

    </>

    //aqui meto los componentes y las rutas
  );
}

export default App;
