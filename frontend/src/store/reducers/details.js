import Immutable from 'immutable';

const initialState = Immutable.fromJS({
	detailsLoading: false,
	id: '',
	name: '',
	modelNumber: '',
	brand: '',
	mainImage: '',
	secondaryImage: '',
	view_list: [],
	pricing_information: [],
	product_description: [],
	breadcrumb_list: [],
	ratingLoading: false,
	ratingDistribution: [],
	overallRating: null,
	reviewCount: null,
	recommendationPercentage: null
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ADIDAS_PRODUCT_DETAIL':
			return state.set('detailsLoading', true);
		case 'ADIDAS_PRODUCT_DETAIL_DATA_RECEIVED':
			return state.set('view_list', action.json.view_list)
					.set('pricing_information', action.json.pricing_information)
					.set('product_description', action.json.product_description)
					.set('breadcrumb_list', action.json.breadcrumb_list)
					.set('id', action.json.id)
					.set('name', action.json.name)
					.set('modelNumber', action.json.model_number)
					.set('brand', action.json.attribute_list.brand)
					.set('detailsLoading', false)
					.set('mainImage', action.json.view_list[0].image_url)
					.set('secondaryImage', action.json.view_list[2].image_url)
		case 'CHANGE_PREVIEW_URL':
			return state.set('mainImage', action.url)
		case 'GET_ADIDAS_RATING':
			return state.set('ratingLoading', true)
		case 'ADIDAS_RATING_RECEIVED':
			return state.set('ratingDistribution', action.json.ratingDistribution)
					.set('overallRating', action.json.overallRating)
					.set('reviewCount', action.json.reviewCount)
					.set('recommendationPercentage', action.json.recommendationPercentage)
					.set('ratingLoading', false)
		default:
			return state;
	}
};

export default reducer;
