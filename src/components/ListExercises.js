import React, { Component } from 'react'
import ExcercisesServices from '../services/ExcercisesServices'
import './styles/invisible.css'
import './styles/solve.css'
import './styles/Index2.css'


class ListExercises extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ejercicios: [],
      tipo:''
    }

    this.deleteExercise = this.deleteExercise.bind(this);
    this.solveExercise = this.solveExercise.bind(this);

  }


  componentDidMount() {
    console.log(sessionStorage.getItem("idGrupo"));
    let id_grupo = sessionStorage.getItem("idGrupo")
    ExcercisesServices.getExerciseByGroup(id_grupo).then((res) => {
      this.setState({ ejercicios: res.data })
    });
    this.setState({tipo: sessionStorage.getItem("tipo")})
  }

  deleteExercise(id){
    ExcercisesServices.deleteExercise(id).then(res=>{
      this.setState({ejercicios: this.state.ejercicios.filter(ejercicio => ejercicio.id !== id)})
      window.location.href = window.location.href;
    })
  }

  solveExercise(id){
    sessionStorage.setItem("idE", id);
    window.location.href="/solve-exercise/"+id;
  }


  render() {
    return (
      <div className='body' id="createE">
        <div className='container'>
        <h2 className='text-center'>Lista de ejercicios</h2>
        <div className='row'>
          <div className='col'>
            {this.state.tipo==1?<a href='/add-exercise' className='btn btn-primary'>Nuevo ejercicio</a>:<></>}
          </div>
          <br/>
          <div className='col'> </div>
          <div className='col'> </div>
        </div>
        <div className='row'>
          <div className='col oculto'> .</div>
        </div>
        <div className='row container text-center'>
          <table className='table table-striped table-or'>
            <thead>
              <tr>
                {this.state.tipo==1?<th>id_ejercicio</th>:<></>}
                <th>ecuación 1</th>
                <th>ecuación 2</th>
                {this.state.tipo==1?<th>AnswerX</th>:<th>Resolver</th>}
                {this.state.tipo==1?<th>AnswerY</th>:<></>}
                {this.state.tipo==1?<th>Actualizar</th>:<></>}
                {this.state.tipo==1?<th>Borrar</th>:<></>}
              </tr>
            </thead>
            <tbody>
              {
                this.state.ejercicios.map(
                  ejercicio =>
                    <tr key={ejercicio.id_ejercicio}>
                      {this.state.tipo==1?<td><a href={'/exercise/'+ejercicio.id_ejercicio} className='btn btn-warning'>{ejercicio.id_ejercicio}</a></td>:<></>}
                      <td>{ejercicio.x1+"X "+ejercicio.sign1+" "+ejercicio.y1+"Y = "+ejercicio.const1}</td>
                      <td>{ejercicio.x2+"X "+ejercicio.sign2+" "+ejercicio.y2+"Y = "+ejercicio.const2}</td>
                      {this.state.tipo==1?<td>{ejercicio.answerX}</td>:<></>}
                      {this.state.tipo==1?<td>{ejercicio.answerY}</td>:<></>}
                      {this.state.tipo==1?<td><a href={'/update-exercise/'+ejercicio.id_ejercicio} className='btn btn-info'>Actualizar</a></td>:<></>}
                      {this.state.tipo==1?<td><button onClick={() => this.deleteExercise(ejercicio.id_ejercicio)} className='btn btn-danger'>Borrar</button></td>:<></>}
                      {this.state.tipo==0?<td><button onClick={() => this.solveExercise(ejercicio.id_ejercicio)} className='btn btn-solve'>Resolver</button></td>:<></>}
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
        </div>
      </div>
    )
  }
}
export default ListExercises;