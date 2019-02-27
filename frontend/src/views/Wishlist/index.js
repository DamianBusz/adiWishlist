import React, { Component, Fragment } from 'react';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { getWishlist as getWishlistAction } from '../../store/actions/wishlistActions';
import WishlistItems from '../../components/WishlistItems';

class Wishlist extends Component {
	componentDidMount() {
		const { getWishlist } = this.props;
		getWishlist();
	}

	render() {
		const { wishlistProducts } = this.props;

		return (
			<Fragment>
				<div className="container">
		

					{this.props.wishlistProducts[0] ? (
						<WishlistItems />
					) : (
					
						<div className="row">
							<div className="col-md-12 centered">
							<div className="wishlist_empty"><span >Your wishlist currently empty</span> </div></div>
						</div>
					)}
				</div>

				<Footer />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	wishlistLoading: state.getIn([ 'wishlist', 'wishlistLoading' ]),
	wishlistProducts: state.getIn([ 'wishlist', 'wishlistProducts' ])
});

const mapDispatchToProps = (dispatch) => ({
	getWishlist: () => dispatch(getWishlistAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
