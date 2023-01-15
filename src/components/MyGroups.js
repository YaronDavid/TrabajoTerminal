import React, { Component } from 'react'
import UserServices from '../services/UserServices';
import './styles/Grupos.css'
import './styles/btn-a.css';
import { Modal } from './Modal';
import { useModal } from './useModal';
import GroupServices from '../services/GroupServices';

export default class  extends Component {

    constructor(props){
        super(props);
        this.state ={
            grupos:[],
            btn:'',
            el_sal:'',
            nombre:'',
            apPat:'',
            apMat:'',
            tipo:'',
            isOpen:false
        };
        this.SelectedGroup = this.SelectedGroup.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.salir = this.salir.bind(this);
    }

    open = () =>{
      this.setState({isOpen:true});
    }

    close = () =>{
      this.setState({isOpen:false});
    }

    salir = (id_grupo) =>{
      let id_user = sessionStorage.getItem("id");
      GroupServices.salir(id_grupo, id_user).then((res)=>{
        window.location.href="/myGroups";
      })
    }

    eliminar = (id_grupo) =>{
      GroupServices.eliminar(id_grupo).then((res)=>{
        window.location.href="/myGroups";
      })
    }

    SelectedGroup=(nombre_grupo, id_grupo)=>{
        sessionStorage.setItem("grupo",nombre_grupo);
        sessionStorage.setItem("idGrupo",id_grupo);
        window.location.href="/grupo";
    }

    componentDidMount(){
        let id = sessionStorage.getItem("id");
        UserServices.getUserById(id).then((res)=>{
          this.setState({nombre: res.data.nombre,apPat: res.data.apellido_paterno,apMat: res.data.apellido_materno,tipo:res.data.tipo_usuario});
          if(res.data.tipo_usuario===0){
            this.setState({btn:<a className="btn" onClick={this.open}>Unirse a grupo</a>})
            this.setState({el_sal:"Salir del grupo"})
          }else{
            this.setState({btn:<a className="btn" href="/crearGrupo">Crear un nuevo grupo</a>})
            this.setState({el_sal:"Eliminar grupo"})
          }
        });
        UserServices.getGroups(id).then((res) =>{
            this.setState({grupos:res.data});
        });
    }
  render() {
    
    return (
      <div className='body' id="create2">
      <div className='container'>
      <h1 className='welcome'>Bienvenido {this.state.nombre} {this.state.apPat} {this.state.apMat}</h1>
      <hr className="linea"></hr>
      <h2>Mis grupos</h2>
      <Modal isOpen = {this.state.isOpen} closeModal={this.close}>
      {this.state.btn}
      </Modal>
      <div className='row'>
      <div className='flex'>
      {
          this.state.grupos.map(
            grupo =>
                    <div key={grupo.id_grupo}>
                    <div className='col-3'>         
                    <div className="card c">
                        <div className="card-body">
                            <h5 className="card-title">{grupo.nombre_grupo}</h5>
                            <p className="card-text">{grupo.descripcion}</p>
                            <p className='card-text'>{this.state.tipo==1?"Clave de acceso: "+grupo.clave_de_acceso:<></>}</p>
                            <button className="btn btn-outline-secondary" onClick={()=>this.SelectedGroup(grupo.nombre_grupo, grupo.id_grupo)}>Entrar al grupo</button><br/><br/>
                            <a className='btn orange' onClick={this.state.tipo==0?()=>this.salir(grupo.id_grupo):()=>this.eliminar(grupo.id_grupo)}>{this.state.el_sal}</a>
                        </div>
                    </div>
                    </div>
                    <div className='col-1'></div>
                    </div>
          )
        }
        </div>
        </div>
        </div>
      </div>
    )
  }
}
