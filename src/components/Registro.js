import React, { Component } from 'react'
import UserServices from '../services/UserServices';
import "./styles/Index2.css"

export default class Registro extends Component {
  constructor(props){
    super(props)

    this.state ={
      Name:'',
      LastName:'',
      MotherName:'',
      Password:'',
      Password2:'',
      SecurityQuestion:'',
      SecurityAnswer:'',
      Email:'',
      Type:'',
      err:<></>
    }
    this.Registro = this.Registro.bind(this);
    this.changeHandleName = this.changeHandleName.bind(this);
    this.changeHandleLastName = this.changeHandleLastName.bind(this);
    this.changeHandleMotherName = this.changeHandleMotherName.bind(this);
    this.changeHandleEmail = this.changeHandleEmail.bind(this);
    this.changeHandlePassword = this.changeHandlePassword.bind(this);
    this.changeHandlePassword2 = this.changeHandlePassword2.bind(this);
    this.changeHandleSecurityQuestion = this.changeHandleSecurityQuestion.bind(this);
    this.changeHandleSecurityAnswer = this.changeHandleSecurityAnswer.bind(this);
    this.changeHandleType = this.changeHandleType.bind(this);
  }
  
  Registro = (event) =>{
    event.preventDefault();
    if(this.state.Name==''||this.state.Name==' '){
      alert("Introduzca su nombre");
    }else{
      if(this.state.SecurityQuestion==''){
        alert("Seleccione una pregunta de seguridad");
      }else{
        if(this.state.Type==''){
          alert("Seleccione un tipo de usuario");
        }else{
          if(this.state.Password.length<6){
            alert("La contraseña es demasiado corta");
          }else{
            if(this.state.Password==this.state.Password2){
              let user = {tipo_usuario: this.state.Type, nombre: this.state.Name, apellido_paterno: this.state.LastName,
              apellido_materno: this.state.MotherName, correo: this.state.Email, contrasena: this.state.Password, 
              pregunta: this.state.SecurityQuestion, respuesta: this.state.SecurityAnswer }
              this.setState({err:<></>});
              alert("Se registro el usuario correctamente, inicia sesión para acceder")
              UserServices.createUser(user).then(res =>{
                window.location.href = '/';
              });
            }else{
              alert("Las contraseñas no coinciden");
            }
          }
        }
      }
    }
  }

  changeHandleName = (event) =>{
    this.setState({Name: event.target.value});
  }
  changeHandleLastName = (event) =>{
    this.setState({LastName: event.target.value});
  }
  changeHandleMotherName = (event) =>{
    this.setState({MotherName: event.target.value});
  }
  changeHandleEmail = (event) =>{
    this.setState({Email: event.target.value});
  }
  changeHandlePassword = (event) =>{
    this.setState({Password: event.target.value});
  }
  changeHandlePassword2 = (event) =>{
    this.setState({Password2: event.target.value});
  }
  changeHandleSecurityAnswer = (event) =>{
    this.setState({SecurityAnswer: event.target.value});
  }
  changeHandleSecurityQuestion = (event) =>{
    this.setState({SecurityQuestion: event.target.value});
  }
  changeHandleType = (event) =>{
    this.setState({Type: event.target.value});
  }
  

  
  render() {
    return (
      <div className='body' id="create2">
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center tit'>Registrarse</h3>
            <div className='card-body'>
              <form id="reg" onSubmit={this.Registro}>
                <div className='form-group'>
                <input placeholder='Nombre(s)' name='nombre' className='form-control' onChange={this.changeHandleName} required/><br/>
                <input placeholder='Apellido paterno' name='apPat' className='form-control' onChange={this.changeHandleLastName} required/><br/>
                <input placeholder='Apellido materno' name='apMat' className='form-control' onChange={this.changeHandleMotherName} required/><br/>
                <input placeholder='Correo electrónico' type="email" name='correo' className='form-control' onChange={this.changeHandleEmail} required/><br/>
                <select name="type" id="type" form="reg" onChange={this.changeHandleType}>
                    <option value="" disabled selected>Seleccione su tipo de usuario</option>
                    <option value="1">Profesor</option>
                    <option value="0">Alumno</option>
                </select><br/>
                <br/>
                <input placeholder='Constraseña (mínimo 6 caracteres)' name='contrasena' className='form-control' minLength="6" onChange={this.changeHandlePassword} required/><br/>
                <input placeholder='Confirmar contraseña' name='conf' className='form-control' onChange={this.changeHandlePassword2} required/><br/>
                <select name="QS" id="QS" form="reg" onChange={this.changeHandleSecurityQuestion}>
                    <option value="" disabled selected>Seleccione una pregunta de seguridad</option>
                    <option value="0">Nombre de tu primer mascota</option>
                    <option value="1">Último lugar que visitaste</option>
                    <option value="2">¿Comó se llama tu mejor amigo?</option>
                </select><br/>
                <br/>
                <input placeholder='Respuesta a la pregunta de seguridad' name='respuesta' className='form-control' onChange={this.changeHandleSecurityAnswer} required/><br/>
                <input type="submit" className='btn' value="Registrarse"/><a className='btn' href='/'>Volver</a>
                {this.state.err}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br/>
      </div>
    )
  }
}
