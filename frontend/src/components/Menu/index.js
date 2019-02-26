import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import adidasVideo from '../../assets/adidas.mp4';
import adidasLogo from '../../assets/logo.png';


class Menu extends Component {
  render() {
	return (
		<Fragment>
			<header className="overlay-top">
				<div className="overlay"></div>
				<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
					<source src={adidasVideo} type="video/mp4" />
				</video>
				<div className="container h-100">
					<div className="d-flex h-100 text-center align-items-center">
						<div className="w-100 text-white">
							<h1 className="display-3">
								<img src={adidasLogo} alt="logo" />
							</h1>
			
							<div className="lead mb-0">
							<span>	<Link to="/">home</Link></span>
								<span><Link to="/wishlist">wishlist</Link></span>
								</div>
							
							
						</div>
					</div>
				</div>
			</header>
			{this.props.children}
		</Fragment>
	)
  }
}


export default Menu;
