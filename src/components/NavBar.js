import React, { useEffect, useState } from 'react';
import Logotipo from '../images/Logotipo.png'
import fb from '../images/contacto-header/facebook.png'
import tw from '../images/contacto-header/twitter.png'
import insta from '../images/contacto-header/instagram.png'
import './styles/Index2.css'
import UserServices from '../services/UserServices';


export default function NavBar() {

  let log='';
  let cerrar='';
  let grupos='';

  const[id,setId] = useState(null);
  const[tipo,setTipo] = useState(null);

  useEffect(()=>{
    setId(sessionStorage.getItem('id'));
    if(id){
    UserServices.getUserById(id).then((res)=>{
      setTipo(res.data.tipo_usuario);
    }
  
    );
  }
    console.log(tipo);
  });

  const closeSesion = () =>{
    sessionStorage.clear();
  }
  

  if(!id){
    log = <>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="registro">Registrarse</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/login">Iniciar sesion</a>
            </li>
          </>
    cerrar = <></>
    grupos = <></>
  }else{
    log = <></>
    grupos =  <li className="nav-item">
                <a className="nav-link active btn btn-close-session" aria-current="page" href="/myGroups">Mis grupos</a>
              </li>
    cerrar =  <li className="nav-item">
                <a className="btn btn-close-session" aria-current="page" href="/" onClick={closeSesion}>Cerrar sesion</a>
              </li>
  }

  if(tipo==0){

  }
  return (
    
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      
        <div className="container">
          <div className="container-fluid">

              <img className="logotipo" src={Logotipo} alt="" />

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                
                {log}

                <li>
                  <a className="nav-link active" aria-current="page">Contacto</a>
                </li>
                <li>
                  <a href="#"><img className="iconos-redes-header" src={fb} alt="Facebook" /></a>
                  <a href="#"><img className="iconos-redes-header" src={tw} alt="Twitter" /></a>
                  <a href="#"><img className="iconos-redes-header" src={insta} alt="Instagram" /></a>
                </li>
                {cerrar}
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}