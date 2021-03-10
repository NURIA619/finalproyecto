import './App.css';

function Entrar() {


  return (
    <>
      <div className="Login">

        <p><label for="usuario">Usuario</label>
          <input type="text" name="usuario" id="usuario" />
        </p>
        <p><label for="contrasenia">Contraseña</label>
          <input type="text" name="contrasenia" id="contrasenia" />
        </p>
        <button>Entrar</button>


      </div>


    </>
  )
}
export default Entrar;


