import React, { Component } from 'react'
import VideoServices from '../services/VideoServices';
import "./styles/Index2.css"

const imagenes = require.context('../images', true);

export default class VideosProfesor extends Component {

  constructor(props){
    super(props);
    this.state = {
      tipo : sessionStorage.getItem("tipo"),
      btn:<></>,
      names:[],
      images:[],
      combinado:[]
    }
    this.verVideo = this.verVideo.bind(this)
  }

  componentDidMount(){
    let aux=[];
    if(this.state.tipo==1){
      this.setState({btn:<a href="./nuevoVideo" className='btn'>Subir vídeo</a>})
    }
    VideoServices.getImages(sessionStorage.getItem("idGrupo")).then((res)=>{
      this.setState({images:res.data});
      VideoServices.getNames(sessionStorage.getItem("idGrupo")).then((r)=>{
        this.setState({names:r.data});
         for(let i=0; i<r.data.length; i++){
          let a = "./"+res.data[i].split("images/").pop();
          let b = r.data[i]
          aux.push({a,b})
        }
        this.setState({combinado:aux});
        console.log(this.state.combinado);
      })
    })
  }

  verVideo = (id_video) =>{
    sessionStorage.setItem("video",id_video);
    window.location.href="./reproductor"
  }

  render() {
    return (
      <div className='body' id="create2">
        <div className='container-xl'>
            <h2>Videos subidos</h2>
            <button className='btn btn-orange'>Volver </button> {this.state.btn}
            
                <div className='row'>
              {
                this.state.combinado.map(
                  com =>
                  <>
                  <div className='col-sm-5' key={com.b.id_video}>
                  <div className='card c' >
                    <img className='card-img-top' src={imagenes(com.a)} alt="error"/>
                    <h5 className='card-title'>{com.b.nombre}</h5>
                    <div className='row'>
                    <div className='col-sm-5'><button className='btn' onClick={() => this.verVideo(com.b.id_video)}>Ver video</button></div>
                    <div className='col-sm-2'></div>
                    </div>
                  </div>
                  </div>
                  <div className='col-sm-2'></div>
                  
                  </>
                )
              }  
                </div>
            </div>
            </div>
    )
  }
}
