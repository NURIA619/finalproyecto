import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import {useState, useEffect} from 'react';



function Footer(props){
    const aleatorio = Math.floor(Math.random() * 3);
    return(
<footer className= "Footer">

<div classRrss ="Rrss">
       
            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://es-es.facebook.com/"target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/?lang=es"target="_blank"><i class="fab fa-twitter"></i></a>
</div>
    
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
          <a href="https://outlook.live.com/owa/"target="_blank"><i class="fas fa-envelope-open-text"></i></a>



<h1>¡¡¡Oferta Destacada!!!</h1>
<div className="Oferta">
{props.paletas[aleatorio]}
</div>     


</footer>




    )


}



















export default Footer;