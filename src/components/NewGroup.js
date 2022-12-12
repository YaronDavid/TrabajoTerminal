import React, { useEffect } from 'react'
import { useState } from 'react';
import GroupServices from '../services/GroupServices';
import "./styles/Index2.css"
import "./styles/NewGroup.css"

export default function NewGroup() {
    useEffect(()=>{
        if(grupo.clave_de_acceso==''){
            let letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let resultado = '';
            for(let i=0; i<5; i++){
                resultado = resultado+letras.charAt(Math.floor(Math.random()*letras.length));
            }
            setGrupo({clave_de_acceso:resultado});
        }
    })
    const [grupo, setGrupo] = useState({
        nombre_grupo:'',
        descripcion:'',
        clave_de_acceso:''
    });

    const handleChange = (event) =>{
        setGrupo({...grupo, [event.target.name]: event.target.value});
    }
    
    const crear = (event) =>{
        GroupServices.getMax().then((res)=>{
            GroupServices.crear(grupo).then((r)=>{    })
            let id = sessionStorage.getItem("id");
            let gr = res.data.id_grupo+1;
            GroupServices.unirse(gr,id).then((re)=>{
            })
            window.location.href="/myGroups"
        })
        
    }

  return (
    <div className='body'>
        <div className='container-sm'>
            <br/>
            <div className='card ab'>
                <h2 className='orange center'>Nuevo Grupo</h2>
                <div className='card-body'>
                <form id="reg">
                    <div className='form-group'>
                        <label>Nombre del grupo</label>
                        <input name='nombre_grupo' className='form-control' onChange={handleChange}/><br/>
                        <label>Descripcion del grupo</label>
                        <input  name='descripcion' className='form-control' onChange={handleChange}/><br/>
                        <label>Clave de accesso</label>
                        <input value={grupo.clave_de_acceso} name='clave_de_acceso' className='form-control' disabled/><br/>
                    <button className='btn' onClick={crear}>Crear</button><a className='btn btn-red' href="/myGroups">Volver</a>
                </div>
              </form>
            </div>
            </div>
        </div>
    </div>
  )
}
