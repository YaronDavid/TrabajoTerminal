import React, { Component } from 'react'

export default class Registro extends Component {
  render() {
    return (
      <>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Registrarse</h3>
            <div className='card-body'>
              <form id="reg">
                <div className='form-group'>
                <input placeholder='Nombre' name='nombre' className='form-control'/><br/>
                <input placeholder='Apellido paterno' name='apPat' className='form-control'/><br/>
                <input placeholder='Apellido materno' name='apMat' className='form-control'/><br/>
                <input placeholder='Correo' name='correo' className='form-control'/><br/>
                <select name="cars" id="cars" form="reg">
                    <option value="" disabled selected>Seleccione tipo de usuario</option>
                    <option value="0">Profesor</option>
                    <option value="1">Alumno</option>
                </select><br/>
                <br/>
                <input placeholder='Constraseña' name='contrasena' className='form-control'/><br/>
                <input placeholder='Confirmar onstraseña' name='conf' className='form-control'/><br/>
                <select name="cars" id="cars" form="reg">
                    <option value="" disabled selected>Seleccione una pregunta de seguridad</option>
                    <option value="0">Nombre de tu primer mascota</option>
                    <option value="1">Ultimo lugar que visitaste</option>
                    <option value="2">¿Comó se llama tu mejor amigo?</option>
                </select><br/>
                <br/>
                <input placeholder='Respuesta a la pregunta de seguridad' name='respuesta' className='form-control'/><br/>
                <a className='btn btn-success'>Registrarse</a> <a className='btn btn-danger'>Volver</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
