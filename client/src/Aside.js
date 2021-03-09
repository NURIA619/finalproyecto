import { Route, Link } from 'react-router-dom'
import { useState} from 'react';
import Paleta from './Paleta';
import Main from './Main';



function Aside(props) {
    let [paleta, setPaleta] = useState("");
    function datosPaleta(){
        setPaleta(
            props.paleta
            )
    }

   
let id;

    return (
        <div className="Aside">
            <h1>{props.paleta}</h1>
            <img src={props.img} />
            <button onClick = {datosPaleta}><Link to={`./Paleta/${props.id}`}>Ver</Link></button>
           
            <Route exact path="/Paleta/:id">
             <Paleta    
                    // let id={props.id}
                    paleta={props.paleta}
                    img={props.imagen}
                    colores={props.colores}
                    precio={props.precio}
                />
            </Route>

                {/* <Paleta         
                    // let id={props.id}
                    paleta={props.paleta}
                    img={props.imagen}
                    colores={props.colores}
                    precio={props.precio}
                /> */}
        </div>
    )

    
}



export default Aside;