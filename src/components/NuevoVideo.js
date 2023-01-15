import React, { Component } from 'react'
import VideoServices from '../services/VideoServices'

export default class NuevoVideo extends Component {

    constructor(props){
        super(props);

        this.state = {
            archivo:"",
            nombreArchivo:"",
            imagen:""
        };

        this.SubirVideo = this.SubirVideo.bind(this);
        this.onChangeVideo = this.onChangeVideo.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeImagen = this.onChangeImagen.bind(this);

    }

    SubirVideo = async() =>{
        await VideoServices.upload(this.state.archivo[0], this.state.nombreArchivo, sessionStorage.getItem("idGrupo"), this.state.imagen).then((res)=>{
            console.log(res.data)
            window.location.href="/videosProfesor"
        }).catch(()=>{
            console.log("noooo")
        })
    }
    onChangeVideo = (e) =>{
        this.setState({archivo:e.target.files});
    }
    onChangeNombre = (e) =>{
        this.setState({nombreArchivo:e.target.value});
    }
    onChangeImagen = (e) =>{
        this.setState({imagen:e.target.files});
    }

  render() {
    return (
        <div className='body' id="create1"><br/>
        <div className="container">
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h1 className='Title text-center'>Nuevo video</h1>
            <div className='card-body'>
                <form className="row g-3 needs-validation">
                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <div className="form-group">
                                <label className="form-label">Seleccione video</label>
                                <input type="file" id="file" name="file" required onChange={this.onChangeVideo}/>
                            </div>
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <label className='form-label'>Imagen de presentación</label>
                            <input type="file" id="img" name="img" required onChange={this.onChangeImagen}/>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-8'>
                            <label className='form-label'>Nombre del archivo</label>
                            <input type="text" id="name" name="name" required onChange={this.onChangeNombre}/>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    

                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <br/><br/>
                        <div className="col-sm-4">
                            <input type="button" className='btn' value="Subir" onClick={this.SubirVideo}/>
                        </div>
                        <div className="col-sm-2">
                            <a href='/videosProfesor'>Volver</a>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
    )
  }
}
