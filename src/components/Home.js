import React, { Component } from 'react'
import userServices from '../services/UserServices';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            nombre:'',
            apPat:'',
            apMat:''
        };
    }
    componentDidMount(){
        let id_user = sessionStorage.getItem('id');
        userServices.getUserById(id_user).then((res)=>{
            this.setState({id:id_user, nombre: res.data.nombre,apPat: res.data.apellido_paterno,apMat: res.data.apellido_materno});
        });
    }
  render() {
    return (
        <>
        <div>Hola</div>
        <div>{this.state.nombre} {this.state.apPat} {this.state.apMat}</div>
      </>
    )
  }
}
