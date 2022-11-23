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

  const[id,setId] = useState(null);
  const[tipo,setTipo] = useState(null);

  useEffect(()=>{
    setId(sessionStorage.getItem('id'));
    if(id){
    UserServices.getUserById(id).then((res)=>{
      setTipo(res.data.tipo_usuario);
      sessionStorage.setItem("tipo",tipo);
    }
  
    );
  }
  });

  const closeSesion = () =>{
    sessionStorage.clear();
  }
  

  if(!id){
    sesion = <form className='d-flex'>
    <a href='./login' className='btn btn-outline-success'>Iniciar Sesion</a>
    <a href='./registro' className='btn btn-outline-success'>Registrarse</a>
    </form>

    grupos=<></>
  }else{
    grupos =  <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/myGroups">Mis grupos</a>
                </li>
            </>
    sesion =  <li className="d-flex">
                <a className="btn btn-outline-warning" aria-current="page" href="/" onClick={closeSesion}>Cerrar sesion</a>
              </li>
  }

  return (
    
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container-fluid'>
          <img className="logotipo" src={Logotipo} alt="" />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>

                {grupos}

                <li>
                  <a className="nav-link active" aria-current="page">Contacto</a>
                </li>
                <li>
                  <a href="#"><img className="iconos-redes-header" src={fb} alt="Facebook" /></a>
                  <a href="#"><img className="iconos-redes-header" src={tw} alt="Twitter" /></a>
                  <a href="#"><img className="iconos-redes-header" src={insta} alt="Instagram" /></a>
                </li>
              </ul>
              {sesion}
            </div>
            </div>
      </nav>
    </>
  );
}