import React, { Component } from 'react'
import UserServices from '../services/UserServices'
import './styles/Index2.css'

export default class Videos extends Component {
    constructor(props){
        super(props)
        this.state = {
            tipo:'',
            msg:<></>
        }
    }

    componentDidMount(){
        UserServices.getUserById(sessionStorage.getItem("id")).then((res)=>{
            this.setState({tipo: res.data.tipo_usuario})
            if(res.data.tipo_usuario===0){
                this.setState({msg:<p>Aquí están los videos que tu profesor subio para apoyarte en el aprendizaje</p>});
            }else{
                this.setState({msg:<p>Entra aquí para subir un nuevo video para tus alumnos</p>});
            }
        })
        
    }
  render() {
    return (
      <div className='body' id="create1">
        <br/><br/>
        <div className='container row'>
            <div className='col-md-1'></div>
            <div className='col-md-4'>
            <div className='card'>
                <img className='card-img-top' src="https://2.bp.blogspot.com/-EDmYRkiQirA/WuM7mx5vH9I/AAAAAAAAGO8/aU1HdnB3L0AtbOamMW8Lb9s_K_j6y5_wQCLcBGAs/s1600/Paginas%2Bde%2Btutoriales.jpg"/>
                <div className='card-body'>
                    <h5 className='card-title'>Videos tutroriales</h5>
                    <p>En este apartado encontrarás videos sobre el uso del sistema</p>
                    <a href="/tutoriales">Entrar</a>
                </div>
                </div>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
            <div className='card'>
                <img className='card-img-top' src="https://i0.wp.com/enmihomestudio.com/wp-content/uploads/2019/12/video_tutorials.png?resize=787.5%2C478&ssl=1"/>
                <div className='card-body'>
                    <h5 className='card-title'>Videos del profesor</h5>
                    {this.state.msg}
                    <a href='/videosProfesor'>Entrar</a>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
