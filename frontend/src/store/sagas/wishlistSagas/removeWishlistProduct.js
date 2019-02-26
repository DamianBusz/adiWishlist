import { put } from 'redux-saga/effects';

export default function* removeWishlistProduct(action) {
	try {
		const json = yield fetch(`/api/wishlist/${action.id}/`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json'
			}
		}).then((response) => response);

		if (json.status >= 200 && json.status < 300) {
			yield put({ type: 'WISHLIST_PRODUCT_REMOVED', id: action.id });
		} else {
			yield put({ type: 'WISHLIST_PRODUCT_FAILURE', id: action.id });
		}
	} catch (err) {
		console.log(err);
	}
}
