import React, { Component } from 'react'
import inicio from "../images/i.png";
import nuevo from "../images/NuevoEjercicio.png"
import actBorr from "../images/ActBorr.png"
import './styles/Index2.css';
import simulador from "../images/Simulador.png"

export default class Tutoriales extends Component {

    constructor(props){
        super(props)

        this.reproducir=this.reproducir.bind(this);
    }


    reproducir = (id) =>{
        sessionStorage.setItem("videoEj",id)
        window.location.href="/reproductor";
    }

  render() {
    return (
        <div className='body l' id="create2">      
        <div className='container-xl'>
        <h2>Tutoriales</h2>
        {sessionStorage.getItem("tipo")!==null?   
        <a href='/videos' className='btn btn-orange'>&lt; Volver</a>
        :<></>
    }
        <div className='flex'>
        {sessionStorage.getItem("tipo")==null?
        <div className="card c">
            <img className="card-img-top" src={inicio}/>
                        <div className="card-body">
                            <h5 className="card-title">Crear cuenta e Iniciar sesión</h5>
                            <p className="card-text">En este video se enseña como crear una cuenta y una vez creada iniciar sesión</p>
                            <button className='btn' onClick={() => this.reproducir(0)}>Ver vídeo</button>
                        </div>
                    </div>
            :
            sessionStorage.getItem("tipo")==1?
            <>
            <div className="card c">
            <img className="card-img-top" src={nuevo}/>
                        <div className="card-body">
                            <h5 className="card-title">Nuevo ejercicio</h5>
                            <p className="card-text">Este vídeo enseña como crear un nuevo ejercicio y que se pide para crearlo</p><br/>
                            <button className='btn' onClick={() => this.reproducir(1)}>Ver vídeo</button>
                        </div>
                    </div>
            <div className="card c">
            <img className="card-img-top" src={actBorr}/>
                        <div className="card-body">
                            <h5 className="card-title">Actualizar/borrar ejercicio</h5>
                            <p className="card-text">Este vídeo muestra las ultimas opciones disponibles con los ejercicios</p>
                            <button className='btn' onClick={() => this.reproducir(2)}>Ver vídeo</button>
                        </div>
                    </div>
            </>
            :
            <div className="card c">
            <img className="card-img-top" src={simulador}/>
                        <div className="card-body">
                            <h5 className="card-title">Simulador</h5>
                            <p className="card-text">Este vídeo como resolver 1 ejercicio de ejemplo usando el simulador</p>
                            <button className='btn' onClick={() => this.reproducir(3)}>Ver vídeo</button>
                        </div>
                    </div>
            }
            
            
                    </div>
        </div>
        
        
        </div>
    )
  }
}
