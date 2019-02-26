import React, { Fragment } from 'react';
import ProductBox from '../ProductBox';
import Dummy from '../../assets/dummy.png';
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
										<p className="failed-search">Please, try again with product correct name.</p>
									</div>
								</div>
							</div>
						</Fragment>
					) : (
						<div className={`row ${props.cssStyle}`}>
							<div className="col-md-12">
								<div className="start" onClick={() => props.history.push(`/details/db2933`)}>
									<div className="stripes ">
										<img src={Dummy} />
										<span>new dragonball serie >></span>
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
