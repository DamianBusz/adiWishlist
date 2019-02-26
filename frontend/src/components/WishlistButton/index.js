import React, { Component, Fragment } from 'react';

export default class WishlistButton extends Component {


	render() {
		const isItemInWishlist = !!this.props.wishlistProducts.filter((e) => e.productId === this.props.currentItemId)
			.length;
		return (
			<Fragment>
				{isItemInWishlist ? (
					<div className="model-icon" >
						<i className="fa fa-bell-o" /> This item is already in your wishlist
					</div>
				) : (
					<div className="model-icon" onClick={this.props.onWishlistClick}>
						<i className="fa fa-heart-o" /> Add to wishlist
					</div>
				)}
			</Fragment>
		);
	}
}
