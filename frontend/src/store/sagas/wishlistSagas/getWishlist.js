import { put } from 'redux-saga/effects';

export default function* getWishlist() {
	try {
		const json = yield fetch(`/api/wishlist/`, {
			headers: {
				Accept: 'application/json'
			}
		}).then((response) => response.json());

		yield put({ type: 'WISHLIST_RECEIVED', json });
	} catch (err) {
		console.log(err);
	}
}
