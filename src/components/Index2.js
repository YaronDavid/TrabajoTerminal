import React from 'react';
import NavBar from './NavBar.js'
import Carrusel from './Carrusel'
import Banner from './Banner.js';


export default function Index2() {
    return (
        <>
        <div className='body'>
            <div className='flex'>
                <div className='content w'>
                    <h1>Bienvenido</h1><br/>
                    <h4>
                        Esta aplicación web tiene como objetivo apoyar a alumnos y profesores
                        de segundo año de nivel secundaria para la
                        resolución de ecuaciones de 2x2. 
                    </h4>
                    <h4>
                        También que los alumnos de segundo año de secundaria puedan
                        observar de manera gráfica el comportamiento de las ecuaciones
                        2x2 en un plano cartesiano.
                    </h4>
                </div>
                <div className="img"></div>
            </div>
            <div className='flex'>
            <div className="card c">
                <div className="card-img-top im p" ></div>
                <h5 className="card-title">Profesor</h5>
                <div className="card-body">
                    <p className="card-text">Crear ejercicios para tus alumnos</p>
                    <p className="card-text">Subir material audiovisual</p>
                    <p className="card-text">Temas explicativos</p>
                </div>
            </div>
            
            <div className="card c">
                <div className="card-img-top im a" ></div>
                <h5 className="card-title">Alumno</h5>
                <div className="card-body">
                    <p className="card-text">Resolver ejercicios</p>
                    <p className="card-text">Utilizar el simulador gráfico</p>
                    <p className="card-text">Aprende de una forma más sencilla</p>
                </div>
            </div>

            <div className="card c">
                <div className="card-img-top im g" ></div>
                <h5 className="card-title">Grupos</h5>
                <div className="card-body">
                    <p className="card-text">Crea y únete a un grupo</p>
                    <p className="card-text">Consulta temas de ayuda</p>
                    <p className="card-text">Consulta material visual de ayuda</p>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}