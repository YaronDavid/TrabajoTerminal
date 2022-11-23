import React, { Component } from 'react'
import userServices from '../services/UserServices';
import Index2 from './Index2';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'',
            nombre:'',
            apPat:'',
            apMat:'',
            grupos:[]
        };
        this.SelectedGroup = this.SelectedGroup.bind(this);
    }

    SelectedGroup(id_grupo){
      sessionStorage.setItem("grupo",id_grupo)
    }
    componentDidMount(){
        let id_user = sessionStorage.getItem('id');
        userServices.getUserById(id_user).then((res)=>{
            this.setState({id:id_user, nombre: res.data.nombre,apPat: res.data.apellido_paterno,apMat: res.data.apellido_materno});
        });
        userServices.getGroups(id_user).then((r) =>{
            this.setState({grupos: r.data});
        });
    }
  render() {
    return (
        <>
        <h2>Bienvenido {this.state.nombre} {this.state.apPat} {this.state.apMat}</h2>
        <Index2/>
      </>
    )
  }
}
