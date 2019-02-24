import React, { Fragment, Component } from 'react';
import {
	getAdidasProductDetail as getAdidasProductDetailAction,
	changePreviewURL as changePreviewURLAction
} from '../../store/actions/detailsActions';
import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import Rating from '../../components/Rating';
import DetailsCardDummy from '../../components/DetailsCardDummy';
import RatingBig from '../../components/RatingBig';
import RatingDistribution from '../../components/RatingDistribution';
import { Circle } from 'rc-progress';

class DetailsView extends Component {
	componentWillMount() {
		const { getAdidasProductDetail, match } = this.props;
		const productID = match.params.productID.toUpperCase();
		getAdidasProductDetail(productID);
	}

	changePreviewUrlClick = (url) => {
		const { changePreviewURL } = this.props;
		changePreviewURL(url);
	};
	render() {
		const {
			name,
			product_description,
			mainImage,
			detailsLoading,
			secondaryImage,
			pricing_information,
			breadcrumb_list,
			brand,
			view_list,
			overallRating,
			ratingLoading,
			ratingDistribution,
      reviewCount,
      recommendationPercentage
		} = this.props;
		return (
			<Fragment>
				<Menu />
				{detailsLoading ? (
					<DetailsCardDummy />
				) : (
					<Fragment>
						<div className="container fade-in ">
							<div className="row">
								<div className="col-md-6">
									<div className="model-img">
										<div className="model-img-box">
											<img src={mainImage} alt={name} className="big-preview " />
										</div>
										<div className="model-preview">
											{view_list.slice(0, 3).map((item, index) => {
												return (
													<img
														src={item.image_url}
														className="image-preview"
														key={index}
														alt={`image${index}`}
														onClick={() => {
															this.changePreviewUrlClick(item.image_url);
														}}
													/>
												);
											})}
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="model">
										{ratingLoading ? null : <Rating overallRating={overallRating} />}
										<div className="model-brand">{brand}</div>
										<div className="model-name">{name}</div>

										<div className="model-price">&#xa3; {pricing_information.currentPrice}</div>
										<div className="model-icon">
											<i className="fa fa-heart-o" /> Add to wishlist
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="hastag-background ">
							<div className="container ">
								<div className="row ">
									<div className="col-md-12">
										<div className="hastags">
											{breadcrumb_list.map((item, index) => {
												return (
													<span className="hastag-item" key={index}>
														{' '}
														&nbsp; #{item.text}
													</span>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row roll-in-right row-top fade-in">
								<div className="col">
									<div className="big-title">
										<span>More info</span>
									</div>
								</div>
							</div>
							<div className="row roll-in-right fade-in">
								<div className="col-md-6">
									<div className="model-name-description">{product_description.title}</div>
									<div className="model-name-sub">{product_description.subtitle}</div>
									<div className="model-name-text">{product_description.text}</div>
								</div>

								<div className="col-md-6">
									<div className="model-img">
										<img src={secondaryImage} alt={name} />
									</div>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row roll-in-right row-top fade-in">
								<div className="col">
									<div className="big-title">
										<span>Ratings</span>
									</div>
								</div>
							</div>
              {ratingLoading ? null : (
							<div className="row roll-in-right fade-in">
								<div className="col-md-6">
								
										<Fragment>
											<RatingBig overallRating={overallRating} />
											<div className="reviews">
												<span>{reviewCount} Reviews</span>
											</div>
											<RatingDistribution data={ratingDistribution} reviewCount={reviewCount} />
										</Fragment>
								
								</div>

								<div className="col-md-6" >
                <div className="recommended"><span>{recommendationPercentage}%</span><p>of customers recommender this product</p> </div>
                </div> 
               
							</div>
              	)}
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	name: state.getIn([ 'details', 'name' ]),
	modelNumber: state.getIn([ 'details', 'modelNumber' ]),
	brand: state.getIn([ 'details', 'brand' ]),
	id: state.getIn([ 'details', 'id' ]),
	mainImage: state.getIn([ 'details', 'mainImage' ]),
	pricing_information: state.getIn([ 'details', 'pricing_information' ]),
	product_description: state.getIn([ 'details', 'product_description' ]),
	breadcrumb_list: state.getIn([ 'details', 'breadcrumb_list' ]),
	detailsLoading: state.getIn([ 'details', 'detailsLoading' ]),
	secondaryImage: state.getIn([ 'details', 'secondaryImage' ]),
	view_list: state.getIn([ 'details', 'view_list' ]),
	ratingLoading: state.getIn([ 'details', 'ratingLoading' ]),
	overallRating: state.getIn([ 'details', 'overallRating' ]),
	ratingDistribution: state.getIn([ 'details', 'ratingDistribution' ]),
  reviewCount: state.getIn([ 'details', 'reviewCount' ]),
  recommendationPercentage: state.getIn(['details', 'recommendationPercentage'])
});

const mapDispatchToProps = (dispatch) => ({
	getAdidasProductDetail: (value) => dispatch(getAdidasProductDetailAction(value)),
	changePreviewURL: (url) => dispatch(changePreviewURLAction(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
