import React, { Component, Fragment } from 'react';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import {
	getWishlist as getWishlistAction,
	removeWishlistProduct as removeWishlistProductAction
} from '../../store/actions/wishlistActions';
import { Link } from 'react-router-dom';



class Wishlist extends Component {
	componentDidMount() {
		const { getWishlist } = this.props;
		getWishlist();
	}

	removedProductById(id) {
		const { removeWishlistProduct } = this.props;
		removeWishlistProduct(id);
	}
	render() {
		const { wishlistProducts } = this.props;
		const result = wishlistProducts
			.map((x, index) => {
				return index % 3 === 0 ? wishlistProducts.slice(index, index + 3) : null;
			})
			.filter((x) => x != null);
		console.log(result);
		return (
			<Fragment>
				<div className="container">
					<div className="row roll-in-right row-top fade-in">
						<div className="col">
							<div className="big-title">
								<span>Your wishlist</span>
							</div>
						</div>
					</div>
					{result.map((result, index) => {
						return (
							<div className="row" key={index}>
								{result.map((item, unique) => (
									<div key={unique} className="col-md-4">
										<div className="wishlist-box">
											<div className="wishlist-image">
												<div
													className="wishlist-remove"
													onClick={() => {
														this.removedProductById(item.id);
													}}
												>
													<i class="fa fa-times" aria-hidden="true"></i>
												</div>
												<img src={item.image} className="wishlist-preview" />
											</div>
											<div className="wishlist-name">{item.name}</div>
											<div className="wishlist-price">&#xa3; {item.price}</div>
											<Link to={`/details/${item.productId}`}>
												<div className="wishlist-price">>> Look up</div>
											</Link>
										</div>
									</div>
								))}
							</div>
						);
					})}
				</div>
				
				<Footer/>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	wishlistProducts: state.getIn([ 'wishlist', 'wishlistProducts' ])
});

const mapDispatchToProps = (dispatch) => ({
	getWishlist: () => dispatch(getWishlistAction()),
	removeWishlistProduct: (id) => dispatch(removeWishlistProductAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
