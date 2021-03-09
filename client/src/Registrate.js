import './App.css';

function Registrate() {
    return(
        
        <div className = "Formulario">
    
        <h2>Introduce tus datos</h2>

              
                        <p><label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre"/>
                        </p>
                        <p><label for="apellidos">Apellidos</label>
                            <input type="text" surname="apellidos" id="apellidos"/>
                        </p>
                        <p><label for="email">@email</label>
                            <input type="text" surname="email" id="email"/>
                        </p>
                        <p><label for="movil">Móvil</label>
                            <input type="movil" surname="movil" id="movil"/>
                        </p>
                </div>
  
  )
}
export default Registrate;
