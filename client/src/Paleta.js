import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import { useState, useEffect } from 'react';


function Paleta() {
    let [listaPaletas, setListaPaletas] = useState("");
    //aqui hago los fetch para paletas

    //fetch PUT para mostrar las paletas
    useEffect(function () { //siempre usar useEffect para hacer un fetch
        fetch("http://localhost:9000/paletas")
            .then(response => response.json())
            .then(paletas => {
                setListaPaletas(paletas.map(function (paleta) {
                    console.log(paleta);
                    return (
                        <div className= "Aside">
                            <h1>{paleta.paleta}</h1>
                            <img src={paleta.imagen} />
                            <h3>{paleta.colores}</h3>
                            <p>{paleta.precio}</p>
                            <button>Añadir</button>
                        </div>
                    )
                }))


            });
    }, []);
    return <div>{listaPaletas}</div>;
}

















export default Paleta;