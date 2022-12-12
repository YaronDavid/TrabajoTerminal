import React, { Component } from 'react'
import "./styles/Index2.css"

export default class CambiarContraseña extends Component {
    constructor(props){
        super(props);
        this.state = {
            pregunta:0,
            respuesta: '',

        }
    }
  render() {
    return (
      <div className='body' id="create1">
        <div className='container'>
            <br/>
            <div className='card'>
        <form>
        <h2 className='Title text-center'>Recuperar contraseña</h2>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='form-group'>
                    <label>Correo</label>
                    <input type="text" className="form-control" id="correo" name="correo" required />
                    <label>Pregunta de seguridad</label>
                    <select>
                        <option value="0">Nombre de tu primer mascota</option>
                        <option value="1">Ultimo lugar que visitaste</option>
                        <option value="2">¿Comó se llama tu mejor amigo?</option>
                    </select>
                    <label>Tu respuesta</label>
                    <input type="text" className="form-control" id="respuesta" name="respuesta" required />
                    <label>Nueva contraseña</label>
                    <input type="password" className="form-control" id="nueva" name="nueva" required /><br/><br/>
                    </div>
                    <a className='btn'>Cambiar</a> <a className='btn btn-orange' href='/login'>Volver</a>
                </div>
                <div className='col-md-2'></div>
            </div>
            
        </form>
        </div>
        </div>
      </div>
    )
  }
}
