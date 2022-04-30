import React from 'react';
import NavBar from './NavBar';
import './styles/Login.css'
export default function Login() {
    return (
        <>
            <NavBar /><br></br>
            <div class="row">
                <div class="col-sm-4">
                </div>
                    <div class="col-sm-4">
                        <h1 className='Title text-center btn-primary'>Iniciar Sesión</h1>
                    </div>
            </div>
            <br></br>
            <form class="row g-3 needs-validation" novalidate>

                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label for="validationEmail4" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="validarionCorreoElectronico" placeholder="ejemplo@gmail.com" required />
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label for="validationPassword4" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="validationContrasena" placeholder="De 6 a 16 caracteres" required />
                        </div>
                    </div>
                </div>

                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Iniciar Sesión</button>
                </div>
            </form>

        </>
    );
}