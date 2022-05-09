import React, { Component } from 'react'
import ExcercisesServices from '../services/ExcercisesServices'

export default class ListExercises extends Component {
  constructor(props){
      super(props)

        this.state = {
          ejercicios: []
      }
  }
  

    componentDidMount(){
      ExcercisesServices.getExercises().then((res)=>{
        this.setState({ejercicios: res.data})
      });
    }

    render() {
    return (
      <div>
        <h2 className='text-center'>Lista de ejercicios</h2>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>id_ejercicio</th>
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
              {
                this.state.ejercicios.map(
                  ejercicio =>
                  <tr key={ejercicio.id_ejercicio}>
                    <td>{ejercicio.id_ejercicio}</td>
                    <td>{ejercicio.x1}</td>
                    <td>{ejercicio.sign1}</td>
                    <td>{ejercicio.y1}</td>
                    <td>{ejercicio.const1}</td>
                    <td>{ejercicio.x2}</td>
                    <td>{ejercicio.sign2}</td>
                    <td>{ejercicio.y2}</td>
                    <td>{ejercicio.const2}</td>
                    <td>{ejercicio.answerX}</td>
                    <td>{ejercicio.answerY}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
