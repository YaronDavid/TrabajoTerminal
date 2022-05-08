import React, {Component, useEffect, useState} from 'react';
import ExcercisesServices from '../services/ExcercisesServices';

export default function ListExercises() {
    
    const [ejercicios, setEjercicios] = useState([])
    
    useEffect(()=>{
        ExcercisesServices.getExercises().then((res)=>{
            setEjercicios({ejercicios: res.data});
        });
    });
    
    return(
        <>
            <h2 className='text-center'>Ejercicios</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>X1</th>
                        <th>Sign1</th>
                        <th>Y1</th>
                        <th>Const1</th>
                        <th>X2</th>
                        <th>Sign2</th>
                        <th>Y2</th>
                        <th>Const2</th>
                        <th>AnswerX</th>
                        <th>AnswerY</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {ejercicios.map(
                                ejercicio =>
                                <tr key={ejercicio.Id}>
                                    <td>{ejercicio.X1}</td>
                                    <td>{ejercicio.Sign1}</td>
                                    <td>{ejercicio.Y1}</td>
                                    <td>{ejercicio.Const1}</td>
                                    <td>{ejercicio.X2}</td>
                                    <td>{ejercicio.Sign2}</td>
                                    <td>{ejercicio.Y2}</td>
                                    <td>{ejercicio.Const2}</td>
                                    <td>{ejercicio.AnswerX}</td>
                                    <td>{ejercicio.AnswerY}</td>
                                </tr>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}