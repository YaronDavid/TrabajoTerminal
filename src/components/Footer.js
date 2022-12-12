import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="footer">
            <footer className="text-white py-4 bg-dark">
  				<div className="container">
					<nav className="row">
						<ul className="col-12 col-md-4 list-unstyled">
							<li className="font-weight-bold mb-2">© 2022 México. Todos los derechos reservados</li>
						</ul>
					
						<ul className="col-12 col-md-4 list-unstyled">
							<li className="text-center">Simulador B058</li>
						</ul>

						<ul className="col-12 col-md-4 list-unstyled">
							<li className="text-center mb-2 d-flex justify-content-between">Síguenos
								<i className="bi bi-facebook"/>
								<i className="bi bi-twitter"/>
								<i className="bi bi-instagram"/>
							</li>
						</ul>
						
					</nav>	  		      
  				</div>
			</footer>
        </div>
    )
}

export default Footer;