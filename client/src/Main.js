import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Styles.css';


function Main() {

    //aqui hago los fetch para paletas

    //fetch PUT para mostrar las paletas
    fetch("/paletas")
        .then(response => response.json())
        .then(datos => {
            
            


        })









    return (
        <>

            <nav>

                <ul>
                    <li><a href="./index.html" class="active">Nuestras Paletas</a></li>
                </ul>
            </nav>

        </>



    )


}

















export default Main;