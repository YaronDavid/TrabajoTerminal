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
            <img class="card-img-top" src="https://slideplayer.es/6089356/19/images/slide_1.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title">Sistemas de ecuaciones</h5>
                            <p className="card-text">En este tema se enseña que es un sistema de ecuaciones lineales de 2x2</p>
                            <a href="/sistemas">Ver tema</a>
                        </div>
                    </div>
            <div className="card c">
            <img class="card-img-top" src="https://www.matesfacil.com/ESO/sistema-ecuaciones/metodo-grafico/P5g.png"/>
                        <div className="card-body">
                            <h5 className="card-title">Metodo gráfico</h5>
                            <p className="card-text">En este tema se enseña en que consiste el metodo gráfico</p>
                            <a href="/metodo">Ver tema</a>
                        </div>
                    </div>
            <div className="card c">
            <img class="card-img-top" src="https://thumbs.dreamstime.com/b/paso-del-paso-paso-83399160.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title">Resolver ecuaciones paso a paso</h5>
                            <p className="card-text">En este tema se enseña como resolver un sistema de ecuaciones de 2x2 atravez del metodo grafico</p>
                            <a href="/pasos">Ver tema</a>
                        </div>
                    </div>
                    </div>
        </div>
        
        
        </div>
    )
  }
}
