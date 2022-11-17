import React from 'react';
import './styles/Login.css';
import { useState } from 'react';
import userServices from '../services/UserServices';

export default function Login() {
    
    const [credenciales, setCredenciales] = useState({
        correo:'',
        contrasena:'',
    });

    const handleChange = (event) =>{
        setCredenciales({...credenciales, [event.target.name]: event.target.value});
    }

    const handleLogin = (e) =>{   
        userServices.login(credenciales.contrasena,credenciales.correo).then((res) => {
            sessionStorage.setItem('id',res.data.id_user);
            console.log(res.data.id_user);
            window.location.href='/home'
        });
    }
    
    return (
        <>
            <div className="row">
                <div className="col-sm-4">
                </div>
                    <div className="col-sm-4">
                        <h1 className='Title text-center btn-primary'>Iniciar Sesión</h1>
                    </div>
            </div>
            <br></br>
            <form className="row g-3 needs-validation" onSubmit={handleLogin}>

                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="correo" name="correo" placeholder="ejemplo@gmail.com" onChange={handleChange} required />
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="De 6 a 16 caracteres" onChange={handleChange} required />
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="row">
                    <div className="col-sm-4">
                    </div>
                <div className="col-sm-4">
                    <a className="btn btn-primary" onClick={handleLogin}>Iniciar Sesión</a>
                </div>
                </div>
            </form>
        </>
    );
}