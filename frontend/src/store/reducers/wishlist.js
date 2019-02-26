import Immutable from 'immutable';

const initialState = Immutable.fromJS({
	wishlistProducts: [],
	wishlistLoading: false,
	wishlistStatus: false,
	wishlistNotification: '',
	category: ''
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_WISHLIST':
			console.log(state.get('wishlistProducts'));
			return state.set('wishlistLoading', true);
		case 'WISHLIST_RECEIVED':
			return state.set('wishlistProducts', action.json).set('wishlistLoading', false);
		case 'REMOVE_WISHLIST_PRODUCT':
			return state.set('wishlistProducts', state.get('wishlistProducts').filter((e) => e.id !== action.id));
		case 'WISHLIST_FAILURE':
			return state
				.set('wishlistStatus', !state.get('wishlistStatus'))
				.set('wishlistNotification', action.text)
				.set('category', action.category);
		case 'WISHLIST_SUCCESS':
			return state
				.set('wishlistStatus', !state.get('wishlistStatus'))
				.set('wishlistNotification', action.text)
				.set('category', action.category);

		default:
			return state;
	}
};

export default reducer;
