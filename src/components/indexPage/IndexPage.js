import React from 'react';
import {Link} from 'react-router-dom';
import './IndexPage.css';

//Animaciones React-reveal
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

//iconos
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaReact, FaNode } from "react-icons/fa";

//imagenes
import LogoVerificadoTwitter from '../../images/logo-verificado-twitter.png';
import imagenApocalipsis from '../../images/imagenApocalipsis.jpg';
import imagenColmann from '../../images/colmann.jpg';

function IndexPage(){
  return(
  <div className='contenedor'>
    <div className='navbar'>
    <Slide bottom cascade>
      <h3 className='texto-matias'>Matias Henriquez</h3>
      <img className='logo-twitter' src={LogoVerificadoTwitter} />
    </Slide>

    </div>
    
    <div className='contenedor-bienvenidos'>
        <p className='texto-saludo'>Hola soy</p>
        <Flip left cascade>
        <h2 className='texto-nombre'>MATIAS HENRIQUEZ</h2>
        <p className='texto-desarrollador'>Desarrollador Web</p>
        </Flip>
      <div className='contenedor-redes-sociales'>
        <Fade left>
          <a className='logo-facebook' href='https://www.facebook.com/matias.henriquez.716195?mibextid=ZbWKwL'><FaFacebookSquare /></a>
          <a className='logo-instagram' href='https://www.instagram.com'><FaInstagram /></a>
          <a className='logo-instagram' href='https://www.linkedin.com/in/matías-henriquez-364715205/'><FaLinkedin /></a>
          
        </Fade>
      </div>
    </div>

    <div className='presentacion'>
    <Slide bottom cascade>
      <div className='contenedor-presentacion'>
        <h2 className='texto-sobre-mi'>Sobre mi</h2>
        <p className='texto-presentacion'>
          ¡Hola! Disfruto creando cosas que viven en Internet. Mi interés en el desarrollo web 
          comenzó en 2020 cuando decidí 
          intentar crear mi propio sitio web. ¡Resulta que mis objetivos eran crear proyectos
          completos el cual contengan bases de datos, poder guardar información y luego
          consultarlas entonces comencé mi camino como Backend-developer. Luego comprendia el funcionamiento 
          y comence a crear mis proyectos FullStack!
        </p>
      </div>
      </Slide>

      
      <div className='contenedor-proyectos'>
      <Slide bottom cascade>
        <h2 className='titulo-mis-proyectos'>Mis proyectos</h2>
        <div className='contenedor-proyecto1'>
          <img className='apocalipsis-imagen' src={imagenApocalipsis}/>
          <div className='contenedor-textos'>
            <h2 className='titulo-apocalipsis'>Apocalipsis servicios</h2>
            <p className='texto-apocalipsis'>Proyecto personal de soporte técnico TI. Landing Page 
              donde muestran sus soluciones a distintos inconvenientes técnicos.
             </p>
          <div className='contenedor-tecnologias'>
            <h2 className='icono-tecnologia'><FaReact /></h2>
            <h2 className='icono-tecnologia'><FaNode /></h2>
          </div>
          <div className='contenedor-botones'>
            <a className='enlace-ver-proyecto' href='https://matiashenriquez1992.github.io/apocalipsis/'>Ver sitio web</a>
            <a className='enlace-ver-proyecto' href='https://github.com/MatiasHenriquez1992/apocalipsis.git'>GitHub</a>
          </div>
          </div>
        </div>
        <div className='contenedor-proyecto1'>
          <img className='apocalipsis-imagen' src={imagenColmann}/>
          <div className='contenedor-textos'>
            <h2 className='titulo-apocalipsis'>Colmann Sillones</h2>
            <p className='texto-apocalipsis'>Proyecto personal. Tienda de comodidades 
             Colmann para hogares y oficinas. Es una Landing Page
             </p>
          <div className='contenedor-tecnologias'>
            <h2 className='icono-tecnologia'><FaReact /></h2>
            <h2 className='icono-tecnologia'><FaNode /></h2>
          </div>
          <div className='contenedor-botones'>
            <a className='enlace-ver-proyecto' href='https://matiashenriquez1992.github.io/colmann/'>Ver sitio web</a>
            <a className='enlace-ver-proyecto' href='https://github.com/MatiasHenriquez1992/colmann.git'>GitHub</a>
          </div>
          </div>
        </div>
        </Slide>
      </div>
      





    </div>
    </div>
    )
}

export default IndexPage;