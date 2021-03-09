import { Route, Link } from 'react-router-dom'

import Paleta from './Paleta';


function Aside(props) {
    
let id;

    return (
        <div className="Aside">
            <h1>{props.paleta}</h1>
            <img src={props.img} />
            <button><Link to={`./Paleta/${props.id}`}>Ver</Link></button>

            

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