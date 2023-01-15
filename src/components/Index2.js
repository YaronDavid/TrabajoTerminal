import React from 'react';


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
                <p className='referencia referenciaa'>[1]</p>
            </div>
            <div className='flex'>
            <div className="card c">
                <div className="card-img-top im p" ></div>
                <p className='referencia'>[2]</p>
                <h5 className="card-title">Profesor</h5>
                <div className="card-body">
                    <p className="card-text">Crear ejercicios para tus alumnos</p>
                    <p className="card-text">Subir material audiovisual</p>
                    <p className="card-text">Temas explicativos</p>
                </div>
            </div>
            
            <div className="card c">
                <div className="card-img-top im a" ></div>
                <p className='referencia'>[3]</p>
                <h5 className="card-title">Alumno</h5>
                <div className="card-body">
                    <p className="card-text">Resolver ejercicios</p>
                    <p className="card-text">Utilizar el simulador gráfico</p>
                    <p className="card-text">Aprende de una forma más sencilla</p>
                </div>
            </div>

            <div className="card c">
                <div className="card-img-top im g" ></div>
                <p className='referencia'>[4]</p>
                <h5 className="card-title">Grupos</h5>
                <div className="card-body">
                    <p className="card-text">Crea y únete a un grupo</p>
                    <p className="card-text">Consulta temas de ayuda</p>
                    <p className="card-text">Consulta material visual de ayuda</p>
                </div>
            </div>
            </div>
            <div className='row'></div>
            <div className='row'>
            <p className='referencia'>1.- answers, (2020) [online] recuperado de: https://answers.uz/book_slug/matematika-variant-2020</p>
            <p className='referencia'>2.- aulaplaneta, (2014,Feb 06) [online] recuperado de: https://www.aulaplaneta.com/2014/02/06/novedades-aulaplaneta/que-tipo-de-profesor-eres-en-relacion-a-las-tic</p>
            <p className='referencia'>3.- otban, [online] recuperado de: https://www.otban5.com/Pelayanan</p>
            <p className='referencia'>4.- nogales la gran frontera (2021) [online] recuperado de: https://transparencia.heroicanogales.gob.mx/ley-de-transparencia-y-de-acceso-a-la-informacion-publica-del-estado-de-sonora</p>
        </div>
        </div>
        
        </>
    );
}