import './App.css';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import {useState, useEffect} from 'react';
import Header from './Header'
import Aside from './Aside'
import Main from './Main'
// import Paleta from '/Paleta'
import Nosotros from '/Nosotros'
import Footer from './Footer'

function App() {
  
  return (
  <>
   <BrowserRouter>
  
  <Header />
  
    <Route exact path = "/Main">
    <Main />
    </Route>

    <Route exact path = "/Nosotros">
    <Nosotros />
    </Route>

  <div className = "Container">
  <Route>
  <aside>
  <Aside />
  </aside>
  </Route>
  {/* <Paleta /> */}
   
    <Main />
</div>

    <Footer />
    </BrowserRouter>
    </>

    //aqui meto los componentes y las rutas
  );
}

export default App;
