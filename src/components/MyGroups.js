import React, { Component } from 'react'
import UserServices from '../services/UserServices';
import './styles/Grupos.css'

export default class  extends Component {

    constructor(props){
        super(props);
        this.state ={
            grupos:[]
        };
        this.SelectedGroup = this.SelectedGroup.bind(this);
        this.button = this.button.bind(this);
    }

    button(){
        if(sessionStorage.getItem("tipo")==0){
            return <a className="btn btn-primary" href="/unirse">Unirse a grupo</a>
        }else{
            return <a className="btn btn-primary" href="/crearGrupo">Nuevo grupo</a>
        }
    }

    SelectedGroup(id_grupo){
        sessionStorage.setItem("grupo",id_grupo)
      }

    componentDidMount(){
        let id = sessionStorage.getItem("id");
        UserServices.getGroups(id).then((res) =>{
            this.setState({grupos:res.data});
        });
        console.log(sessionStorage.getItem("tipo"));
    }
  render() {
    return (
      <>
      <div className='container'><br/>
      <h2>Mis grupos</h2>
      {this.button()}<br/><br/>
      <div className='row'>
      {
          this.state.grupos.map(
            grupo =>
                    <>
                    <div className='col-3'>         
                    <div className="card c" key={grupo.id_grupo}>
                        <div className="card-body">
                            <h5 className="card-title">{grupo.nombre_grupo}</h5>
                            <p className="card-text">Este es el grupo de un profesor</p>
                            <a className="btn btn-outline-secondary" href="/grupo" onClick={this.SelectedGroup(grupo.nombre_grupo)}>Entrar al grupo</a>
                        </div>
                    </div>
                    </div>
                    <div className='col-1'></div>
                    </>
          )
        }
        </div>
        </div>
      </>
    )
  }
}
