import './App.css';
import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './Header'
import Aside from './Aside'
import Paleta from './Paleta'
import Main from './Main'
import Footer from './Footer'


function App() {

 let [listaPaletas, setListaPaletas] = useState("");
 let [paleta, setPaleta] = useState("");
  // let [id, setId] = useState("");
  //aqui hago los fetch para paletas

  //fetch PUT para mostrar las paletas
  useEffect(function () { //siempre usar useEffect para hacer un fetch
    fetch("http://localhost:9000/paletas")
      .then(response => response.json())
      .then(paletas => {
        setListaPaletas(paletas.map(function (paleta) {
         

          return (
            <>
              {/* <Aside
              id = {paleta._id}
              paleta = {paleta.paleta}
              img={paleta.imagen}
              
              /> */}
              
              <Aside
              id = {paleta._id}
              paleta = {paleta.paleta}
              img={paleta.imagen}
              colores={paleta.colores}
              precio={paleta.precio}
              />
       
              
              
            </>
          )
        }))


      });
  }, []);

 
  return (
    <>
      <BrowserRouter>

        <Header />

        
        
        <div className="Container">
        
          <aside>
          
            {listaPaletas}
                        

          </aside>

            <Route exact path="/Paleta/:id">
            <Paleta           
          
                    let id={paleta._id}
                    paleta={paleta.paleta}
                    img={paleta.imagen}
                    colores={paleta.colores}
                    precio={paleta.precio}
                />
            </Route> 

          <Main />
          
        </div>

        <Footer paletas = {listaPaletas}/>
        
      </BrowserRouter>
    </>

    //aqui meto los componentes y las rutas
  );
}

export default App;
