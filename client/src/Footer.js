import { BrowserRouter, Route, Link, Router } from 'react-router-dom'
import {useState, useEffect} from 'react';



function Footer(){

    return(
<footer className= "Footer">

<div classRrss ="Rrss">
       
            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://es-es.facebook.com/"target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/?lang=es"target="_blank"><i class="fab fa-twitter"></i></a>
</div>
    
          <p>© 2018 Qode Interactive, All Rights Reserved</p>
          <i class="fas fa-envelope-open-text"></i>

</footer>




    )


}



















export default Footer;