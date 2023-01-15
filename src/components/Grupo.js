import React, { Component } from 'react'
import "./styles/Index2.css"
import tema from "../images/tema.jpeg"
import eje from "../images/eje.jpeg"
import video from "../images/video.jpeg"

export default class Grupo extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            nombreGrupo:''
        }
    }

  componentDidMount(){
    console.log(sessionStorage.getItem("grupo"));
    console.log(sessionStorage.getItem("idGrupo"));
    this.setState({nombreGrupo:sessionStorage.getItem("grupo")});    

  }

  render() {
    return (
      <div className='body'>

      <div className="hero-body">
        <div className="container">
        <h1>Grupo {this.state.nombreGrupo}</h1>
          <div className='row'>



            <div className='col-3'>
              <div className="card c" >
                <div className="card-body">

                  <h1 className="card-title"><center><b><font face="Comic Sans MS">TEMAS</font></b></center></h1>
                  <img className="card-img-top" src={tema} /><br></br>
                  <p></p><br></br>
                  <p className="card-text">En este apartado puedes consultar los temas relacionados con las ecuaciones lineales 2x2.</p><br></br>
                  <a href="/temas">Ver temas</a>
                </div>
              </div>
            </div>
            <div className='col-1'></div>

            <div className='col-3'>
              <div className="card c" >
                <div className="card-body">
                  <h1 className="card-title"><center><b><font face="Comic Sans MS">EJERCICIOS</font></b></center></h1>
                  <img className="card-img-top" src={eje} /><br></br>
                  <p></p><br></br>
                  <p className="card-text">En este apartado puedes consultar la lista de todos los ejercicios que tienes asignados por parte de tu profesor.</p><br></br>

                  <a href="/exercises">Ver mis ejercicios</a>
                  <br></br>
                </div>
              </div>
            </div>
            <div className='col-1'></div>

            <div className='col-3'>
              <div className="card c" >
                <div className="card-body">
                  <h1 className="card-title"><center><b><font face="Comic Sans MS">VIDEOS</font></b></center></h1>
                  <img className="card-img-top" src={video} /><br></br>
                  <p></p><br></br>
                  <p className="card-text">En este apartado puedes consultar el material audiovisual que tu profesor ha compartido con el grupo.</p><br></br>
                  <a href="/videos">Ver material audiovisual</a>
                </div>
              </div>
            </div>
            <div className='col-1'></div>

          </div>


        </div>
      </div>
    </div>
    )
  }
}
