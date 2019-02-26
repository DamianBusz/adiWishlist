export const getWishlist = () => ({
	type: 'GET_WISHLIST'
});

export const wishlistReceived = (json) => ({
	type: 'WISHLIST_RECEIVED',
	json
});

export const removeWishlistProduct = (id) => ({
	type: 'REMOVE_WISHLIST_PRODUCT',
	id
});

export const wishlistProductRemoved = (id) => ({
	type: 'WISHLIST_PRODUCT_REMOVED',
	id
});

export const adidasWishlistSuccess = (text, category) => ({
	type: 'WISHLIST_SUCCESS',
	text,
	category
});

export const adidasWishlistFailure = (text, category) => ({
	type: 'WISHLIST_FAILURE',
	text,
	category
});
