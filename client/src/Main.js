import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './Styles.css';


function Main() {

    //aqui hago los fetch para paletas

    //fetch PUT para mostrar las paletas
    fetch("/paletas")
        .then(response => response.json())
        .then(datos => {
            let cont = 0;
            datos.forEach(paletas => {
                document.querySelector("#paletas").innerHTML += `
        <img id="modelo${cont}" src=${paletas.modelo}>
        
        <button id="comprar${cont}" class="comprarBtn">Añadir</button>

         `

                cont++;
            })
        })
        .then(function () {

            let array = document.querySelectorAll(".comprarBtn")
            for (let i = 0; i < array.length; i++) {

                document.querySelector(`#comprar${i}`).addEventListener("click", function () {
                    let modelo = document.querySelector(`#modelo${i}`).src
                    let color = document.querySelector(`#selectColor${i}`).value
                    let talla = document.querySelector(`#selectTalla${i}`).value

                    let camisetas = {
                        modelo: modelo,
                        color: color,
                        talla: talla
                    }

                    let objetoRespuesta = {
                        method: 'POST',
                        body: JSON.stringify(paletas),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }

                    fetch("/ventas/post", objetoRespuesta)
                        .then(response => response.json())
                        .then(datos => {

                        })

                })
            }


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