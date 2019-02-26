import React from 'react';

export default function Footer() {
	return (
		<footer className="page-footer font-small dark pt-4">
			<div className="container-fluid text-center text-md-left">
				<div className="row">
					<div className="col-md-4 mt-md-0 mt-4">
						
					</div>

			
					<div className="col-md-4 mb-md-0 mb-4">
						<h4 className="text-uppercase">resources</h4>

						<ul className="list-unstyled">
							<li>
								<a href="https://www.adidas.de/">Official adidas page</a>
							</li>
							<li>
								<a href="https://www.adidas.co.uk">Official api source</a>
							</li>
						
						</ul>
					</div>

					<div className="col-md-4 mb-md-0 mb-4">
						<h4 className="text-uppercase">about</h4>

						<ul className="list-unstyled">
							<li>
								<a href="https://github.com/DamianBusz/adiWishlist">Projects github repository</a>
							</li>
					
						</ul>
					</div>
				</div>
			</div>

            <div className="footer-disclaimer text-center py-3">disclaimer:
    All data are property of Adidas.
    </div>
		</footer>
	);
}
