import React, { Component } from 'react'
import ExcercisesServices from '../services/ExcercisesServices'
import './styles/OneExercise.css'

export default class OneExercise extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          id_ejercicio: window.location.pathname[10]+(window.location.pathname[11] ? window.location.pathname[11] : ''),
          X1: '',
          Sign1: '',
          Y1: '',
          Const1: '',
          X2: '',
          Sign2: '',
          Y2: '',
          Const2: '',
          AnswerX: '',
          AnswerY: ''
        }
        

    }
    
    componentDidMount(){
        ExcercisesServices.getExerciseById(this.state.id_ejercicio).then(res=>{
          let exercise = res.data;
          this.setState({X1: exercise.x1,
            Sign1: exercise.sign1,
            Y1: exercise.y1,
            Const1: exercise.const1,
            X2: exercise.x2,
            Sign2: exercise.sign2,
            Y2: exercise.y2,
            Const2: exercise.const2,
            AnswerX: exercise.answerX,
            AnswerY: exercise.answerY})
        })
      }

    render() {
    return (
        <>
        <br />
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Ejercicio {this.state.id_ejercicio}</h3>
              <div className='card-body'>
                <label>{this.state.X1}X {this.state.Sign1} {this.state.Y1}Y = {this.state.Const1}</label><br/>
                <label>{this.state.X2}X {this.state.Sign2} {this.state.Y2}Y = {this.state.Const2}</label><br/>
                <label>X = {this.state.AnswerX}</label><br/>
                <label>Y = {this.state.AnswerY}</label><br/><br/>
                <a href='/exercises' className="btn btn-success">Volver</a>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </>
    )
  }
}
