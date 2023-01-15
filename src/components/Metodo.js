import React, { Component } from 'react'
import "./styles/Index2.css"
import grafica from "../images/nvo.png"
import gif from "../images/giff.gif"

export default class Metodo extends Component {
  render() {
    return (
      <div className='body'>
        <div className='container'>
        <h2><b><font face="Comic Sans MS">Resolución de un sistema de ecuaciones de 2x2 con el método gráfico</font></b></h2>
                        <h5>Las ecuaciones lineales de 2 incógnitas representan una recta, por lo que un sistema
                            de 2 ecuaciones es la representación de 2 rectas diferentes, para llegar al resultado
                            de las ecuaciones es necesario encontrar el punto de intersección de ambas rectas como
                            se muestra a continuación:<p className='referencia'>[1]</p>
                        </h5><br></br>
                        <img src={grafica} />
                        <p className='referencia'>[2]</p>
                        <h5></h5><br></br>
                        <h5>
                            Si ambas igualdades se cumplen, quiere decir que el resultado es el correcto, en caso contrario,
                            el resultado está erróneo.
                        </h5><br></br>
                        <img src={gif} id="gif"/><br/><br/>
                        <a href='/temas' className='btn btn-orange'>Volver</a>
                    
      </div>
      <div className='row refrowmet'>
      <p className='referencia'>1.- Marta, Superprof, [online] recuperado de: https://www.superprof.es/apuntes/escolar/matematicas/algebralineal/sistemas/clasificacion-de-sistemas-de-ecuaciones.html</p>
      <p className='referencia'>2.- O.L. Abel, YouTube, (2014, Mar 02), [online] recuperado de: https://www.youtube.com/watch?v=BY0quSCZT0s</p>
      </div>
                        </div>
    )
  }
}
