import React, { Component } from 'react'

export default class Temas extends Component {
  render() {
    return (
        <>      
        <div className='container-xl'>
        <h2>Temas</h2>
        <a href='/grupo' className='btn btn-danger'>&lt; Volver</a>
        <div className="card c">
            <img class="card-img-top" src="https://slideplayer.es/6089356/19/images/slide_1.jpg"/>
                        <div className="card-body">
                            <h5 className="card-title">SIstemas de ecuaciones</h5>
                            <p className="card-text">En este tema se enseña que es un sistema de ecuaciones lineales de 2x2
                            y como resolverlos atravez del metodo grafico</p>
                            <a href="/sistemas">Ver tema</a>
                        </div>
                    </div>
        </div>
        
        
        </>
    )
  }
}
