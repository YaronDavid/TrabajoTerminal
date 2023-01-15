import React, { Component } from 'react'
import ecuaciones from '../images/ec.png'
import "./styles/Index2.css"

import "./styles/Index2.css"

export default class Sistemas extends Component {
    render() {
        return (
            <div className='body' id='createE'>
                <div className='container-sm'>
                    <h1 className="card-title"><center><b><font face="Comic Sans MS">SISTEMAS DE ECUACIONES LINEALES DE 2x2.</font></b></center></h1><br></br>
                    <div className='contanier'>
                        <h4><b><font face="Comic Sans MS">Sistemas de ecuaciones lineales de 2x2.</font></b></h4>
                        <p>Los sistemas de ecuaciones lineales de 2x2 son los que están conformados por
                            2 ecuaciones con 2 incógnitas como se muestra en la siguiente figura:
                        </p><br></br>
                        <img src={ecuaciones} />
                        <h5></h5><br></br>
                        <p>
                            Para resolver estos sistemas, es necesario encontrar el valor de "X" y "Y" que satisfacen ambas
                            ecuaciones.
                        </p><br></br>
                        
                    <a href='/temas' class='btn btn-orange'>&lt; Volver</a>
                </div>
            </div>
            </div>
        )
    }
}