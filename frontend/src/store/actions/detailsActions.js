export const getAdidasProductDetail = (name) => ({
	type: 'GET_ADIDAS_PRODUCT_DETAIL',
	name
});


export const adidasProductDetailDataReceived = (json) => ({
	type: 'ADIDAS_PRODUCT_DETAIL_DATA_RECEIVED',
	json
});

export const changePreviewURL = (url) => ({
	type: 'CHANGE_PREVIEW_URL',
	url
});


export const getAdidasRating = (name) => ({
	type: 'GET_ADIDAS_RATING',
	name
});


export const adidasRatingDataReceived = (json) => ({
	type: 'ADIDAS_RATING_RECEIVED',
	json
});

