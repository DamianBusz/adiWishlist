import { put } from 'redux-saga/effects';

export default function* fetchAdidasProductDetail(action) {
	try {
		const json = yield fetch(`/api/wishlist/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(action.json)
		}).then((response) => response);

		if (json.status >= 200 && json.status < 300) {
			yield put({
				type: 'WISHLIST_SUCCESS',
				text: 'Your product have been added to wishlist!',
				category: 'success'
			});
		} else if (json.status === 400) {
			yield put({
				type: 'WISHLIST_FAILURE',
				text: 'This product is already on your wishlist.',
				category: 'warning'
			});
		} else {
			yield put({
				type: 'WISHLIST_FAILURE',
				text: 'Huston, we got a problem.',
				category: 'danger'
			});
		}
	} catch (err) {
		console.log(err);
	}
}
