import { Route, Link } from 'react-router-dom'
import { useState} from 'react';
import Paleta from './Paleta';
import Main from './Main';



function Aside(props) {
    let [paleta, setPaleta] = useState("");
    // function datosPaleta(){
    //     setPaleta(
    //         props.paleta
    //         )
    // }

   
let id;

    return (
        <div className="Aside">
            <h1>{props.paleta}</h1>
            <img src={props.img} />
            <button><Link to={`./Paleta/${props.id}`}>Ver</Link></button>
           
           
             
           

               
        </div>
    )

    
}



export default Aside;