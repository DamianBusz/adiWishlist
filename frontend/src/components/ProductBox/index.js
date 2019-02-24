import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class ProductBox extends Component {
	onDetailsClick = () => {
		const { productID, getAdidasProductDetail } = this.props;
		console.log('details clicked, yay!');
		getAdidasProductDetail(productID.toUpperCase());
	};
	render() {
		const { imageUrl, productName, productTitle, originalPrice, salePrice, productID } = this.props;
		return (
			<div className="col-md-3">
				<div className="product-box">
					<div className="product-img">
						<img src={imageUrl} />
					</div>
					<div className="product-detail">
						<p className="product-detail-top">{productTitle}</p>
						<span className="product-detail-title">{productName}</span>
						<div className="product-detail-sale">
							{salePrice < originalPrice ? (
								<Fragment>
									<span className="product-detail-price-sale">&#xa3; {salePrice}</span>
									<span className="product-details-price-opacity">
										<strike>&#xa3; {originalPrice}</strike>
									</span>
								</Fragment>
							) : (
								<Fragment>
									<span className="product-detail-price">&#xa3;{originalPrice}</span>
								</Fragment>
							)}
						</div>
						<Link to={`/details/${productID}`}>
							<div className="details">
								<span className="details-text">
									<i className="fa fa-expand" /> details
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductBox;
