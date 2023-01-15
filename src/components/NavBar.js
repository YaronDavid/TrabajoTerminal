import React, { useEffect, useState } from 'react';
import Logotipo from '../images/Logotipo.png'
import fb from '../images/contacto-header/facebook.png'
import tw from '../images/contacto-header/twitter.png'
import insta from '../images/contacto-header/instagram.png'
import './styles/Index2.css'
import UserServices from '../services/UserServices';


export default function NavBar() {

  let sesion='';
  let grupos='';
  let tutoriales=<></>

  const[id,setId] = useState(null);
  const[tipo,setTipo] = useState(null);


  useEffect(()=>{
    setId(sessionStorage.getItem('id'));
    if(id){
    UserServices.getUserById(id).then((res)=>{
      setTipo(res.data.tipo_usuario);
      sessionStorage.setItem("tipo",tipo);
    });
    
  }
  });

  const closeSesion = () =>{
    sessionStorage.clear();
  }
  

  if(!id){
    sesion = <form className='d-flex'>
    <a href='./login' className='btn'>Iniciar Sesión</a>
    <a href='./registro' className='btn'>Registrarse</a>
    </form>

    grupos=<></>
    tutoriales = <a className="nav-link active" aria-current="page" href="/tutoriales">Tutoriales</a>
  }else{
    grupos =  <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/myGroups">Mis grupos</a>
                </li>
            </>
    sesion =  <li className="d-flex">
                <a className="btn" aria-current="page" href="/" onClick={closeSesion}>Cerrar sesión</a>
              </li>
  }

  return (
    
    <>
      <nav className="navbar navbar-expand-lg" id="nav">
        <div className='container-fluid'>
          <img className="logotipo" src={Logotipo} alt="" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>

                {grupos}
                {tutoriales}

                <li>
                  <a className="nav-link active" aria-current="page">Redes sociales:</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100088834684603"><img className="iconos-redes-header" src={fb} alt="Facebook" /></a>
                  <a href="https://twitter.com/Simulador_B058"><img className="iconos-redes-header" src={tw} alt="Twitter" /></a>
                  <a href="https://www.instagram.com/simulador2021.b058/"><img className="iconos-redes-header" src={insta} alt="Instagram" /></a>
                </li>
              </ul>
              {sesion}
            </div>
            </div>
      </nav>
    </>
  );
}