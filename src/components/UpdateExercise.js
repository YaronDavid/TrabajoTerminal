import React, { Component } from 'react';
import ExcercisesServices from '../services/ExcercisesServices';
import "./styles/Update.css"

class UpdateExercise extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id_ejercicio: window.location.pathname[17]+(window.location.pathname[18] ? window.location.pathname[18] : ''),
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

    this.changeX1Handler = this.changeX1Handler.bind(this);
    this.changeSign1Handler = this.changeSign1Handler.bind(this);
    this.changeY1Handler = this.changeY1Handler.bind(this);
    this.changeConst1Handler = this.changeConst1Handler.bind(this);
    this.changeX2Handler = this.changeX2Handler.bind(this);
    this.changeSign2Handler = this.changeSign2Handler.bind(this);
    this.changeY2Handler = this.changeY2Handler.bind(this);
    this.changeConst2Handler = this.changeConst2Handler.bind(this);
    this.changeAnswerXHandler = this.changeAnswerXHandler.bind(this);
    this.changeAnswerYHandler = this.changeAnswerYHandler.bind(this);

    this.updateExercise = this.updateExercise.bind(this);

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

  updateExercise = (e) => {
    e.preventDefault();
    let exercise = {
      x1: this.state.X1, sign1: this.state.Sign1, y1: this.state.Y1, const1: this.state.Const1,
      x2: this.state.X2, sign2: this.state.Sign2, y2: this.state.Y2, const2: this.state.Const2,
      answerX: this.state.AnswerX, answerY: this.state.AnswerY
    }

    console.log('ejercicio => ' + JSON.stringify(exercise));

    ExcercisesServices.updateExercise(exercise, this.state.id_ejercicio).then(res => {
      window.location.href = '/exercises'
    });
  }

  changeX1Handler = (event) => {
    this.setState({ X1: event.target.value });
  }
  changeSign1Handler = (event) => {
    this.setState({ Sign1: event.target.value });
  }
  changeY1Handler = (event) => {
    this.setState({ Y1: event.target.value });
  }
  changeConst1Handler = (event) => {
    this.setState({ Const1: event.target.value });
  }
  changeX2Handler = (event) => {
    this.setState({ X2: event.target.value });
  }
  changeSign2Handler = (event) => {
    this.setState({ Sign2: event.target.value });
  }
  changeY2Handler = (event) => {
    this.setState({ Y2: event.target.value });
  }
  changeConst2Handler = (event) => {
    this.setState({ Const2: event.target.value });
  }
  changeAnswerXHandler = (event) => {
    this.setState({ AnswerX: event.target.value });
  }
  changeAnswerYHandler = (event) => {
    this.setState({ AnswerY: event.target.value });
  }

  render() {
    return (
      <div className='body'>
        <br />
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Actualizar ejercicio</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Literal X1</label>
                    <input placeholder='Literal de X en la primer ecuación' name='X1' className='form-control'
                      value={this.state.X1} onChange={this.changeX1Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Signo 1</label>
                    <input placeholder='Signo + o -' name='Sign1' className='form-control'
                      value={this.state.Sign1} onChange={this.changeSign1Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Literal Y1</label>
                    <input placeholder='Literal de Y en la primer ecuación' name='Y1' className='form-control'
                      value={this.state.Y1} onChange={this.changeY1Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Constante 1</label>
                    <input placeholder='Valor constante en la primer ecuación' name='Const1' className='form-control'
                      value={this.state.Const1} onChange={this.changeConst1Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Literal X2</label>
                    <input placeholder='Literal de X en la segunda ecuación' name='X2' className='form-control'
                      value={this.state.X2} onChange={this.changeX2Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Signo 2</label>
                    <input placeholder='Signo + o -' name='Sign2' className='form-control'
                      value={this.state.Sign2} onChange={this.changeSign2Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Literal Y2</label>
                    <input placeholder='Literal de Y en la segunda ecuación' name='Y2' className='form-control'
                      value={this.state.Y2} onChange={this.changeY2Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Constante 2</label>
                    <input placeholder='Valor constante en la segunda ecuación' name='Const2' className='form-control'
                      value={this.state.Const2} onChange={this.changeConst2Handler} />
                  </div>
                  <div className='form-group'>
                    <label>Respuesta X</label>
                    <input placeholder='Valor de X' name='AnswerX' className='form-control'
                      value={this.state.AnswerX} onChange={this.changeAnswerXHandler} />
                  </div>
                  <div className='form-group'>
                    <label>Respuesta Y</label>
                    <input placeholder='Valor de Y' name='AnswerY' className='form-control'
                      value={this.state.AnswerY} onChange={this.changeAnswerYHandler} />
                  </div>

                  <button className='btn btn-success' onClick={this.updateExercise}>Guardar</button>
                  <a className='btn btn-danger' href='/exercises' style={{ marginLeft: "10px" }}>Cancelar</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateExercise;