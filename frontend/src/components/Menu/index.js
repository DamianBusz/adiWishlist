import React from 'react';
import { Link } from 'react-router-dom';
import adidasSvg from '../../assets/Adidas.svg'
function Menu() {
	return (
		<div className="col">
		<div className="row ">
		
			<div className="col-md-4" />
			<div className="col-md-4">
				<div className="logo ">
					<img src={adidasSvg} alt="Logo" className="logo-svg" />
				</div>
			</div>
			<div className="col-md-4">
				<div className="menu">
					<Link to="/">
						<span>
							<i className="fa fa-home home" aria-hidden="true" />
						</span>
					</Link>
					<span>
						<Link to="/">
							<i className="fa fa-heartbeat wishlist" aria-hidden="true" />
						</Link>
					</span>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Menu;
