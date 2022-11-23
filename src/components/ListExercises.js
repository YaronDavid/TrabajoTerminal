import React, { Component } from 'react'
import ExcercisesServices from '../services/ExcercisesServices'
import './styles/invisible.css'
import './styles/solve.css'


class ListExercises extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ejercicios: []
    }

    this.deleteExercise = this.deleteExercise.bind(this);
    this.solveExercise = this.solveExercise.bind(this);

  }


  componentDidMount() {
    ExcercisesServices.getExercises().then((res) => {
      this.setState({ ejercicios: res.data })
    });
  }

  deleteExercise(id){
    ExcercisesServices.deleteExercise(id).then(res=>{
      this.setState({ejercicios: this.state.ejercicios.filter(ejercicio => ejercicio.id !== id)})
      window.location.href = window.location.href;
    })
  }

  solveExercise(id){
    sessionStorage.setItem("id", id);
    window.location.href="/solve-exercise/"+id;
  }


  render() {
    return (
      <div>
        <h2 className='text-center'>Lista de ejercicios</h2>
        <div className='row'>
          <div className='col'>
            {sessionStorage.getItem("tipo")==1?<a href='/add-exercise' className='btn btn-primary'>Nuevo ejercicio</a>:<></>}
          </div>
          <br/>
          <div className='col'> </div>
          <div className='col'> </div>
        </div>
        <div className='row'>
          <div className='col oculto'> .</div>
        </div>
        <div className='row container text-center'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                {sessionStorage.getItem("tipo")==1?<th>id_ejercicio</th>:<></>}
                <th>ecuación 1</th>
                <th>ecuación 2</th>
                {sessionStorage.getItem("tipo")==1?<th>AnswerX</th>:<></>}
                {sessionStorage.getItem("tipo")==1?<th>AnswerY</th>:<></>}
                {sessionStorage.getItem("tipo")==1?<th>Actualizar</th>:<></>}
                {sessionStorage.getItem("tipo")==1?<th>Borrar</th>:<></>}
              </tr>
            </thead>
            <tbody>
              {
                this.state.ejercicios.map(
                  ejercicio =>
                    <tr key={ejercicio.id_ejercicio}>
                      {sessionStorage.getItem("tipo")==1?<td><a href={'/exercise/'+ejercicio.id_ejercicio} className='btn btn-warning'>{ejercicio.id_ejercicio}</a></td>:<></>}
                      <td>{ejercicio.x1+"X "+ejercicio.sign1+" "+ejercicio.y1+"Y = "+ejercicio.const1}</td>
                      <td>{ejercicio.x2+"X "+ejercicio.sign2+" "+ejercicio.y2+"Y = "+ejercicio.const2}</td>
                      {sessionStorage.getItem("tipo")==1?<td>{ejercicio.answerX}</td>:<></>}
                      {sessionStorage.getItem("tipo")==1?<td>{ejercicio.answerY}</td>:<></>}
                      {sessionStorage.getItem("tipo")==1?<td><a href={'/update-exercise/'+ejercicio.id_ejercicio} className='btn btn-info'>Actualizar</a></td>:<></>}
                      {sessionStorage.getItem("tipo")==1?<td><button onClick={() => this.deleteExercise(ejercicio.id_ejercicio)} className='btn btn-danger'>Borrar</button></td>:<></>}
                      {sessionStorage.getItem("tipo")==0?<td><button onClick={() => this.solveExercise(ejercicio.id_ejercicio)} className='btn btn-solve'>Resolver</button></td>:<></>}
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
export default ListExercises;