import './App.css';

function Registrate() {
    return(
        
        <div className = "Formulario">
    
        <h2>Introduce tus datos</h2>

              
                        <p><label for="usuario">Usuario</label>
                            <input type="text" name="usuario" id="usuario"/>
                        </p>     
                         <p><label for="contrasenia">Contraseña</label>
                            <input type="text" name="contrasenia" id="contrasenia"/>
                        </p>    


                        <p><label for="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre"/>
                        </p>
                        <p><label for="apellidos">Apellidos</label>
                            <input type="text" surname="apellidos" id="apellidos"/>
                        </p>
                        <p><label for="direccion">Dirección</label>
                            <input type="text" surname="direccion" id="direccion"/>
                        </p>
                        <p><label for="cp">Código Postal</label>
                            <input type="text" surname="cp" id="cp"/>
                        </p>
                        <p><label for="ciudad">Ciudad</label>
                            <input type="text" surname="ciudad" id="ciudad"/>
                        </p>
                        <p><label for="email">@email</label>
                            <input type="text" surname="email" id="email"/>
                        </p>
                        <p><label for="movil">Móvil</label>
                            <input type="movil" surname="movil" id="movil"/>
                        </p>
                        <button>Añadir</button>
                </div>
  
  )
}
export default Registrate;
