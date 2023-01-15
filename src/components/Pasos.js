import React, { Component } from 'react'
import "./styles/Index2.css"

export default class Pasos extends Component {
  render() {
    return (
      <div className='body'>
        <h5><b><font face="Comic Sans MS">Pasos para resolver un sistema de ecuaciones de 2x2 con el método gráfico.</font></b></h5><br></br>
                        <h6><b>Paso 1:</b> Despejar la incognita Y.</h6>
                        <p>Esto significa dejar a Y de un lado de la igualdad y mover lo demás al otro lado.</p><br></br>
                        <h6><b>Paso 2:</b> Tabulación.</h6>
                        <p>Se le asignarán varios valores a la variable X, y con eso se obtendrá el valor de la variable Y
                            Los pares (X,Y) serán los puntos que se van a trazar en la gráfica.
                        </p><br></br>
                        <h6><b>Paso 3:</b> Trazar los puntos en el plano cartesiano.</h6>
                        <p>Se colocarán los puntos en el plano y posteriormente se conectarán todos con 1 sola línea recta,
                            si es necesario usar más líneas, los puntos son incorrectos.
                        </p><br></br>
                        <h6><b>Paso 4:</b> Realizar los pasos anteriores con la otra ecuación.</h6>
                        <p>Ahora se hará lo mismo con la otra ecuación, a modo de obtener la segunda recta.
                        </p><br></br>
                        <h6><b>Paso 5:</b> Buscar la intersección de ambas rectas.</h6>
                        <p>Finalmente se buscará el punto (X,Y) donde ambas líneas se intersectan, ese punto representa
                            los valores de las variables X y Y.
                        </p><br></br>
                        <h4><b><font face="Comic Sans MS">Comprobación del resultado.</font></b></h4>
                        <p>
                            Para comprobar si el resultado es correcto, basta con reemplazar los valores de X y Y.
                        </p><br/><br/>
                        <a href='/temas' className='btn btn-orange'>Volver</a>
      </div>
    )
  }
}
