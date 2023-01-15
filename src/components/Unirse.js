import React, { Component } from 'react'
import GroupServices from '../services/GroupServices';
import UserServices from '../services/UserServices';
import "./styles/Modal.css"

export default class Unirse extends Component {
    constructor(props){
        super(props);
        this.state = {
            clave:''
        }

        this.unirse = this.unirse.bind(this);
        this.getClave = this.getClave.bind(this);
    }

    unirse = () =>{
        let unido=false;
        let existe=false;
        GroupServices.get().then((grupos)=>{
            grupos.data.forEach(e =>{
                if(e.clave_de_acceso==this.state.clave){
                    existe=true;
                }
            })
            if(existe){
                GroupServices.getByClave(this.state.clave).then((res)=>{
                    UserServices.getGroups(sessionStorage.getItem("id")).then((r)=>{
                        r.data.forEach(element =>{
                            if(element.clave_de_acceso==res.data.clave_de_acceso){
                                alert("Ya te encuentras en este grupo");
                                unido=true;
                                window.location.href="/myGroups";
                            }
                        })
                        if(unido==false){
                            alert("bienvenido");
                            //console.log(res.data.id_grupo+"  "+sessionStorage.getItem("id"))
                            GroupServices.unirse(res.data.id_grupo, sessionStorage.getItem("id"));
                            window.location.href="/myGroups";
                        }
                    })
                })
            }else{
                alert("El codigo que ingresaste no existe");
            }
        })
        
    }

    getClave = (event) =>{
        this.setState({clave: event.target.value});
    }
  
  render() {
    return (
        <>
        <h3 className='orange'>Ingrese la clave del grupo.</h3>
        <form>
            <input type="text" onChange={this.getClave} placeholder="ingrese clave" className='form-control'></input><br/><br/>
            <a className='btn' onClick={this.unirse}>Unirse</a>
        </form>
      </>
    )
  }
}
