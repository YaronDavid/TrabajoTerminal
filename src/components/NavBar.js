import React from 'react';
import Logotipo from '../images/Logotipo.png'
import fb from '../images/contacto-header/facebook.png'
import tw from '../images/contacto-header/twitter.png'
import insta from '../images/contacto-header/instagram.png'
import './styles/Index2.css'


export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container-fluid">

            <a className="navbar-brand" href="index.html">
              <img className="logotipo" src={Logotipo} alt="" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/exercises">Ejercicios</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Twitter</a></li>
                    <li><a className="dropdown-item" href="#">Facebook</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="simulador.html">Simulador</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="temas.html">Temas</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="registroUsuario.html">Registrarse</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Iniciar sesion</a>
                </li>

                <li>
                  <a className="nav-link active" aria-current="page">Contacto</a>
                </li>
                <li>
                  <a href="#"><img className="iconos-redes-header" src={fb} alt="Facebook" /></a>
                  <a href="#"><img className="iconos-redes-header" src={tw} alt="Twitter" /></a>
                  <a href="#"><img className="iconos-redes-header" src={insta} alt="Instagram" /></a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}