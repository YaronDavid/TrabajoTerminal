import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Header=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Simulador B058</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

                    <li class="nav-item">
                        <Link to="/Home" class="nav-link active">Inicio</Link>
                    </li>

                    <li class="nav-item">
                        <Link to="/Simulator" class="nav-link active">Simulador</Link>
                    </li>
        
                    <li class="nav-item">
                        <Link to="/Topics" class="nav-link active">Temas</Link>
                    </li>
        
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page">
                            Contactoㅤ
                        <i className="bi bi-facebook"/>ㅤ
                        <i className="bi bi-twitter"/>ㅤ
						<i className="bi bi-instagram"/>
                        </a>  
                    </li>


						

                </ul>
                <form class="d-flex">
                    <Link to="/Login" class="btn btn-outline-success" type="button">Iniciar Sesión</Link>
                    <Link to="/Register" class="btn btn-outline-success" type="button">Registrarse</Link>
                </form>
            </div>
            </div>
        </nav>
    )
}

export default Header;