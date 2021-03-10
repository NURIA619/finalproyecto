import {Link } from 'react-router-dom'


function Header() {
// llamada a la api fetch para username y password
    return (
        <header className = "App-header">

              <nav >
                <ul className = "App-link SinIconos">
                    <li><Link to="./">Pagina Principal</Link></li>
                    <li><Link to="./Nosotros">Sobre Nosotros</Link></li>              
                </ul>

                <ul className = "App-link Iconos">
                    <li><Link to="./Registrate">Registrate</Link></li>
                    <li><Link to="./Entrar">Entrar</Link></li>
                    <li className= "Carrito"><Link to="./Carrito"><i class="ventas fas fa-cart-arrow-down"></i></Link></li>
                </ul>
                

                {/* hacer dos inputs uno para username y otro para el password */}
            </nav>
            <h1>Sombra Aquí y Sobra Allá</h1>
        </header>
          





    



    )


}
















export default Header;