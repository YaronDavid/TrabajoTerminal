import React from 'react';
import carr1 from '../images/slider/slider01.jpeg';
import carr2 from '../images/slider/slider02.jpeg';
import carr3 from '../images/slider/slider03.jpeg';

export default function Carrusel(){
    return(
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
		  <div className="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		  </div>
			
		  <div className="carousel-inner">
			<div className="carousel-item active">
			  <img src={carr1} className="d-block w-100" alt="Slider 01" />
			  <div className="carousel-caption d-none d-md-block">
				<h5>First slide label</h5>
				<p>Some representative placeholder content for the first slide.</p>
			  </div>
			</div>
			  
			<div className="carousel-item">
			  <img src={carr2} className="d-block w-100" alt="Slider 02"/>
			  <div className="carousel-caption d-none d-md-block">
				<h5>Second slide label</h5>
				<p>Some representative placeholder content for the second slide.</p>
			  </div>
			</div>
			  
			<div className="carousel-item">
			  <img src={carr3} className="d-block w-100" alt="Slider 03"/>
			  <div className="carousel-caption d-none d-md-block">
				<h5>Third slide label</h5>
				<p>Some representative placeholder content for the third slide.</p>
			  </div>
			</div>
		  </div>			
		  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Previous</span>
		  </button>
		  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="visually-hidden">Next</span>
		  </button>
		</div>
    );
}