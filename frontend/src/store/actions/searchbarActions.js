export const changeInputValue = (value) => ({
	type: 'CHANGE_INPUT_VALUE',
	value
});

export const changeLoadingTime = (bool) => ({
	type: 'CHANGE_LOADING_STATUS',
	bool
});

export const getAdidasSuggestion = (name) => ({
	type: 'GET_ADIDAS_SUGGESTIONS',
	name
});

export const adidasSuggestionDataReceived = (json) => ({
	type: 'ADIDAS_SUGGESTION_DATA_RECEIVED',
	json
});

export const setSearchName = (name) => ({
	type: 'SET_SEARCH_NAME',
	name
});
