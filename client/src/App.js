import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  

let [apiResponse, setApiResponse] = useState("");


let [prueba, setPrueba] = useState("");

function callAPI(){
  fetch('http://localhost:9000/users')
  .then(res => res.text())
  .then(res => setApiResponse(res))
}

useEffect(()=>{
  callAPI();
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {apiResponse}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
