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
            if(typeof res.data == 'string'){
                alert("Correo o contraseña incorrectos");
            }else{
                sessionStorage.setItem('id',res.data.id_user);
                alert("bienvenido");
                window.location.href='/myGroups'
            }
        });
    }
    
    return (
        <div className='body' id="createE"><br/>
            <div className="container">
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h1 className='Title text-center'>Iniciar Sesión</h1>
                <div className='card-body'>
                    <form className="row g-3 needs-validation" onSubmit={handleLogin}>
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label className="form-label">Correo electrónico</label>
                                    <input type="email" className="form-control" id="correo" name="correo" placeholder="ejemplo@gmail.com" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-sm-2">
                            </div>
                        </div>

                        <div className="row last">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" id="contrasena" name="contrasena" placeholder="******" onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-sm-2">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <br/><br/>
                            <div className="col-sm-4">
                                <input type="submit" className="btn" onClick={handleLogin} value="Iniciar Sesion"/>
                            </div>
                            <div className="col-sm-4">
                                <a href='/restablecer'>¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}