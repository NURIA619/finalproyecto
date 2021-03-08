import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react';


function Header() {
// llamada a la api fetch para username y password
    return (
        <header className = "App-header">

              <nav >
                <ul className = "App-link SinIconos">
                    <li>Pagina Principal</li>
                    <li>Sobre Nosotros</li>
                </ul>

                <ul className = "App-link Iconos">
                    <li>Registrate</li>
                    <li>Entrar</li>
                    <li className= "Carrito"><i class="ventas fas fa-cart-arrow-down"></i></li>
                </ul>
                

                {/* hacer dos inputs uno para username y otro para el password */}
            </nav>
            <h1>Sombra Aquí y Sobra Allá</h1>
        </header>
          





    



    )


}
















export default Header;