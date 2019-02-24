import React, { Fragment } from 'react';
import ProductBox from '../ProductBox';

function ProductList(props) {
	return (
		<Fragment>
			{props.data.length > 0 ? (
				<div className="container">
					<div className="row row-apply-padding">
						<div className="col">
							<span className="search-result-text">Your recent search result</span>
						</div>
					</div>

					<div className={`row ${props.cssStyle}`}>
						{props.data.map((item, index) => {
							return (
								<ProductBox
									key={index}
									productTitle={item.subTitle}
									productName={item.displayName}
									originalPrice={item.price}
									salePrice={item.salePrice}
									imageUrl={item.imageURL}
									productID={item.productid}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<div className="container">
					{props.lastSearchName.length > 0 ? (
						<Fragment>
							<div className="row row-apply-padding">
								<div className="col">
									<span className="search-result-text">Your recent search result</span>
								</div>
							</div>
							<div className={`row ${props.cssStyle}`}>
								<div className="col">
									<div className="start">
										<span className="failed-search">Sorry, we couldnt get product named </span>
										<span className="failed-search-product">{props.lastSearchName}</span>
									</div>
								</div>
							</div>
						</Fragment>
					) : (
						<div className={`row ${props.cssStyle}`}>
							<div className="col">
								<div className="start">
									<div className="stripes">
										<img src="https://www.logolynx.com/images/logolynx/ea/eae9086492a89a68dca800ec7a0e52fa.gif" />
									</div>
									<div className="creativity">
									<span className="failed-search-product">C</span>
									<span className="failed-search">reativity. </span>
									</div>
									<div className="collaboration">
									<span className="failed-search-product">c</span>
									<span className="failed-search">ollaboration.</span>
									</div>
									<div className="confidence">
									<span className="failed-search-product">c</span>
									<span className="failed-search">onfidence.</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</Fragment>
	);
}

export default ProductList;
