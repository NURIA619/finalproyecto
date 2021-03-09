import { useState, useEffect } from 'react';

function Paleta(props) {
    let [paleta, setPaleta] = useState("");
    
    // let id = useParams(props.id);

    return (
        <div>
        
            <h1>{props.paleta}</h1>
            <img src={props.imagen} />
            <h3>{props.colores}</h3>
            <p>{props.precio}</p>
            <button>Añadir</button>
            {console.log(props.precio)}
        </div>
    )



}


export default Paleta;