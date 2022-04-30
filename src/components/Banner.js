import React from 'react';
import ban1 from '../images/banner/banner01.jpg'
import ban2 from '../images/banner/banner02.jpg'
import ban3 from '../images/banner/banner03.jpg'

export default function Banner() {
	return (
		<main>
			<section>
				<div class="container">
					<div class="row">

						<div class="col-12 col-sm-4 text-center">
							<img width="400px" src={ban1} alt="Banner 01" />
							<h5>Titulo 01</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						</div>

						<div class="col-12 col-sm-4 text-center">
							<img width="400px" src={ban2} alt="Banner 02" />
							<h5>Titulo 02</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						</div>

						<div class="col-12 col-sm-4 text-center">
							<img width="400px" src={ban3} alt="Banner 03" />
							<h5>Titulo 03</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}