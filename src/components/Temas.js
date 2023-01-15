import React, { Component } from 'react'
import "./styles/Index2.css"

export default class Temas extends Component {
  render() {
    return (
        <div className='body l' id="create2">      
        <div className='container-xl'>
        <h2>Temas</h2>
        <a href='/grupo' className='btn btn-orange'>&lt; Volver</a>
        <div className='flex'>
        <div className="card c">
            <img className="card-img-top" src="https://slideplayer.es/6089356/19/images/slide_1.jpg"/>
            <p className='referencia'>[1]</p>
                        <div className="card-body">
                            <h5 className="card-title">Sistemas de ecuaciones</h5>
                            <p className="card-text">En este tema se enseña que es un sistema de ecuaciones lineales de 2x2.</p>
                            <a href="/sistemas">Ver tema</a>
                        </div>
                    </div>
            <div className="card c">
            <img className="card-img-top" src="https://www.matesfacil.com/ESO/sistema-ecuaciones/metodo-grafico/P5g.png"/>
            <p className='referencia'>[2]</p>
                        <div className="card-body">
                            <h5 className="card-title">Método gráfico</h5>
                            <p className="card-text">En este tema se enseña en que consiste el método gráfico</p>
                            <a href="/metodo">Ver tema</a>
                        </div>
                    </div>
            <div className="card c">
            <img className="card-img-top" src="https://thumbs.dreamstime.com/b/paso-del-paso-paso-83399160.jpg"/>
            <p className='referencia'>[3]</p>
                        <div className="card-body">
                            <h5 className="card-title">Resolver ecuaciones paso a paso</h5>
                            <p className="card-text">En este tema se enseña como resolver un sistema de ecuaciones de 2x2 a través del método gráfico</p>
                            <a href="/pasos">Ver tema</a>
                        </div>
                    </div>
                    </div>
        </div>
        
        <div className='row refrow'>
            <p className='referencia'>1.- slideplayer, [online] recuperado de: https://www.google.com/amp/s/slideplayer.es/amp/6089356/</p>
            <p className='referencia'>2.- matesfacil, [online] recuperado de: https://www.matesfacil.com/ESO/sistema-ecuaciones/metodo-grafico/metodo-grafico-sistemas-ecuaciones-lineales-resueltos-grafica-recta-interseccion-solucion-interseccion.html</p>
            <p className='referencia'>3.- Oleksander, dreamstime, (2000), [online] recuperado de: https://es.dreamstime.com/foto-de-archivo-paso-del-paso-paso-image83399160</p>
        </div>
        </div>
    )
  }
}
