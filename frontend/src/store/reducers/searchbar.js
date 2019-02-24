import Immutable from 'immutable';

const initialState = Immutable.fromJS({
	value: '',
	lastSearchName: '',
	suggested: [],
	products: [],
	firstAppInteraction: true
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_INPUT_VALUE':
			return state.set('value', action.value);
		case 'CHANGE_LOADING_STATUS':
			return state.set('loadingAdidasData', action.bool);
		case 'GET_ADIDAS_SUGGESTIONS':
			return state.set('loadingAdidasData', true);
		case 'ADIDAS_SUGGESTION_DATA_RECEIVED':
			return state.set('products', action.json.products).set('suggested', action.json.suggested);
		case 'SET_SEARCH_NAME':
			return state.set('lastSearchName', action.name);
		default:
			return state;
	}
};

export default reducer;
