import React, { Component } from 'react'
import ecuaciones from '../images/ec.png'
import grafica from '../images/nvo.png'

export default class Sistemas extends Component {
  render() {
    return (
        <>
        <div className='container-sm'>
            <h1>Resolver sistemas de ecuaciones lineales de 2x2 con el metodo grafico</h1>
            <div className='contanier'>
                <h4>Sistemas de ecuaciones lineales de 2x2</h4>
                <p>Los sistemas de ecuaciones lineales de 2x2 son sistemas que se conforman props
                    2 ecuaciones con 2 incognitas como se muestra en la siguiente figura
                </p>
                <img src={ecuaciones}/>
                <p>
                    Para resolver estos sistemas es necesario encoentrar el valor de X y Y que satisfacen ambas
                    igualdades
                </p>
                <h4>Resolución de un sistema de ecuaciones de 2x2 con el metodo grafico</h4>
                <p>Las ecuaciones lineales de 2 incognitas representan una recta, por lo que un sistema
                    de 2 ecuaciones es la representación de 2 rectas diferentes, para llegar al resultado
                    de las ecuaciones es necesario encontrar el punto de intersección de ambas rectas como
                    se muestra a continuación.
                </p>
                <img src={grafica}/>
                <h5>Pasos para resolver un sistema de ecuaciones de 2x2 con el metodo grafico</h5>
                <h6>Paso 1: Despejar la incognita Y</h6>
                <p>Esto significa dejar a Y de un lado de la igualdad y mover lo demás al otro lado</p>
                <h6>Paso 2: Tabulación</h6>
                <p>Se le asignaran varios valores a la variable X, y con eso se obtendrá el valor de la variable Y 
                    Los pares (X,Y) serán los puntos que se trazaran en la grafica.
                </p>
                <h6>Paso 3: Trazar los puntos en el plano carteciano</h6>
                <p>Se colocaran los puntos en el plano y posteriormente se conectarán todos con 1 sola liena recta,
                    si es necesario usar más lineas, los puntos son incorrectos.
                </p>
                <h6>Paso 4: Realizar los pasos anteriores con la otra ecuación</h6>
                <p>Ahora se hará lo mismo con la otra ecuación a modo de obtener la segunda recta.
                </p>
                <h6>Paso 5: Buscar la intersección de ambas rectas</h6>
                <p>Finalmente se buscara el punto (X,Y) donde ambas lineas se intersectan, ese punto representa
                    los valores de las variables X y Y.
                </p>
                <h4>Comprobación del resultado</h4>
                <p>
                    Para comprobar si el resultado es correcto basta con reemplazar los valores de X y Y 
                    si ambas igualdades se cumplen, quiere decir que el resultado es el correcto, en caso contrario
                    el resultado está erroneo
                </p>
            </div>
            <a href='/temas' className='btn btn-danger'>&lt; Volver</a>
        </div>
        
        </>
    )
  }
}
