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
                        <img src={ecuaciones} /><p className='referencia'>[1]</p>
                        <p>
                            Para resolver estos sistemas, es necesario encontrar el valor de "X" y "Y" que satisfacen ambas
                            ecuaciones.<p className='referencia'>[2]</p>
                        </p><br></br>
                        
                    <a href='/temas' class='btn btn-orange'>&lt; Volver</a>
                </div>
            </div><br/><br/>
            <div className='row'>
                <p className='referencia'>1.- O.L. Abel, YouTube, (2014, Mar 02), [online] recuperado de: https://www.youtube.com/watch?v=BY0quSCZT0s</p>
                <p className='referencia'>2.- Wikiversidad, [online] recuperado de: https://es.wikiversity.org/wiki/Sistema_lineal_de_dos_ecuaciones_con_dos_inc%C3%B3gnitas#:~:text=Un%20sistema%20lineal%20de%20dos,de%20ecuaciones%2C%20y%20que%20permiten</p>
            </div>
            </div>
        )
    }
}