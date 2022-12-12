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
    if(this.state.Password.length<5){
      this.setState({err:<div className='red'>La contraseña debe tener minimo 5 caracteres</div>})
    }else{
      if(this.state.Password==this.state.Password2){
        let user = {tipo_usuario: this.state.Type, nombre: this.state.Name, apellido_paterno: this.state.LastName,
        apellido_materno: this.state.MotherName, correo: this.state.Email, contrasena: this.state.Password, 
        pregunta: this.state.SecurityQuestion, respuesta: this.state.SecurityAnswer }
        this.setState({err:<></>});
        console.log('usuario => ' + JSON.stringify(user));
        UserServices.createUser(user).then(res =>{
          window.location.href = '/';
        });
      }else{
        this.setState({err:<div className='red'>Contraseña incorrecta</div>});
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
      <div className='body'>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center tit'>Registrarse</h3>
            <div className='card-body'>
              <form id="reg">
                <div className='form-group'>
                <input placeholder='Nombre' name='nombre' className='form-control' onChange={this.changeHandleName}/><br/>
                <input placeholder='Apellido paterno' name='apPat' className='form-control' onChange={this.changeHandleLastName}/><br/>
                <input placeholder='Apellido materno' name='apMat' className='form-control' onChange={this.changeHandleMotherName}/><br/>
                <input placeholder='Correo' name='correo' className='form-control' onChange={this.changeHandleEmail}/><br/>
                <select name="type" id="type" form="reg" onChange={this.changeHandleType}>
                    <option value="" disabled selected>Seleccione tipo de usuario</option>
                    <option value="1">Profesor</option>
                    <option value="0">Alumno</option>
                </select><br/>
                <br/>
                <input placeholder='Constraseña' name='contrasena' className='form-control' minLength="6" onChange={this.changeHandlePassword}/><br/>
                <input placeholder='Confirmar onstraseña' name='conf' className='form-control' onChange={this.changeHandlePassword2}/><br/>
                <select name="QS" id="QS" form="reg" onChange={this.changeHandleSecurityQuestion}>
                    <option value="" disabled selected>Seleccione una pregunta de seguridad</option>
                    <option value="0">Nombre de tu primer mascota</option>
                    <option value="1">Ultimo lugar que visitaste</option>
                    <option value="2">¿Comó se llama tu mejor amigo?</option>
                </select><br/>
                <br/>
                <input placeholder='Respuesta a la pregunta de seguridad' name='respuesta' className='form-control' onChange={this.changeHandleSecurityAnswer}/><br/>
                <a className='btn' onClick={this.Registro}>Registrarse</a> <a className='btn' href='/'>Volver</a>
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
