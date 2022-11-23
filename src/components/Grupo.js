import React, { Component } from 'react'

export default class Grupo extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            nombreGrupo:''
        }
    }

  componentDidMount(){
    console.log(sessionStorage.getItem("grupo"));
    this.setState({nombreGrupo:sessionStorage.getItem("grupo")});    

  }

  render() {
    return (
        <>
      <h1>Grupo {this.state.nombreGrupo}</h1>
      <ul>
        <li><a href='/temas'>Temas</a></li>
        <li><a href='/exercises'>Ejercicios</a></li>
        <li>Videos tutoriales</li>
      </ul>
      </>
    )
  }
}
