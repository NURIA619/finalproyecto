import './App.css';
import {Route } from 'react-router-dom'
import Paleta from './Paleta'
import Principal from './Principal'
import Nosotros from './Nosotros'
import Registrate from './Registrate'
import Entrar from './Entrar'
import Carrito from './Carrito'

function Main() {

    return (
        <div className="Main">

            <Route exact path="/">
                <Principal />
            </Route>

            <Route path="/Nosotros">
                <Nosotros />
            </Route>

            <Route path="/Registrate">
                <Registrate />
            </Route>

            <Route path="/Entrar">
                <Entrar />
            </Route>

            <Route path="/Carrito">
                <Carrito />
            </Route>

            {/* <Route exact path="/Paleta/:id">
                <Paleta />
            </Route> */}

        </div>

    
    )


}



export default Main;