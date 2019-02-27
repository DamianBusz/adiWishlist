import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeWishlistProduct as removeWishlistProductAction } from '../../store/actions/wishlistActions';
class Wishlistitems extends Component {
	removedProductById(id) {
		const { removeWishlistProduct } = this.props;
		removeWishlistProduct(id);
	}

	render() {
		const result = this.props.wishlistProducts
			.map((x, index) => {
				return index % 3 === 0 ? this.props.wishlistProducts.slice(index, index + 3) : null;
			})
			.filter((x) => x != null);
		return (
			<Fragment>
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
												<i className="fa fa-times" aria-hidden="true" />
											</div>
											<img src={item.image} className="wishlist-preview" alt="wishlist-preview" />
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
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	wishlistProducts: state.getIn([ 'wishlist', 'wishlistProducts' ])
});

const mapDispatchToProps = (dispatch) => ({
	removeWishlistProduct: (id) => dispatch(removeWishlistProductAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlistitems);
